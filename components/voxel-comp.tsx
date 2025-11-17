'use client';

import { useState, useEffect, useRef, useCallback } from "react";
import { Box } from "@chakra-ui/react";
import { CompContainer, CompSpinner } from "./voxel-comp-loader";
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { loadGLTFModel } from "../lib/model";

function easeOutCirc(x: number): number {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
  }

  const VoxelComp = () => {
    const refContainer = useRef<HTMLDivElement>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const refRenderer = useRef<THREE.WebGLRenderer | null>(null)

    const handleWindowResize = useCallback(() => {
      const renderer = refRenderer.current
      const container = refContainer.current
      if (container && renderer) {
        const scW = container.clientWidth
        const scH = container.clientHeight

        renderer.setSize(scW, scH)
      }
    }, [])

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
      const container = refContainer.current
      if (container) {
        const scW = container.clientWidth
        const scH = container.clientHeight

        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true
        })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(scW, scH)
        renderer.outputColorSpace = THREE.SRGBColorSpace
        container.appendChild(renderer.domElement)
        refRenderer.current = renderer
        const scene = new THREE.Scene()

        const target = new THREE.Vector3(-0.5, 1.2, 0)
        const initialCameraPosition = new THREE.Vector3(
          50 * Math.sin(0.2 * Math.PI),
          10,
          50 * Math.cos(0.2 * Math.PI)
        )

        // 640 -> 240
        // 8   -> 6
        const scale = scH * 0.005 + 4.8
        const camera = new THREE.OrthographicCamera(
          -scale,
          scale,
          scale,
          -scale,
          0.01,
          50000
        )
        camera.position.copy(initialCameraPosition)
        camera.lookAt(target)

        const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
        scene.add(ambientLight)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.autoRotate = true
        controls.target = target

        // Use a hardcoded absolute path to ensure the model is loaded from the root
        loadGLTFModel(scene, '/computer.glb', {
          receiveShadow: false,
          castShadow: false
        }).then(() => {
          animate()
          setLoading(false)
        }).catch(error => {
          console.error('Error loading 3D model:', error)
          setLoading(false)
          setError(true)
        })

        let req: number | null = null
        let frame = 0
        const animate = () => {
          req = requestAnimationFrame(animate)

          frame = frame <= 100 ? frame + 1 : frame

          if (frame <= 100) {
            const p = initialCameraPosition
            const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

            camera.position.y = 10
            camera.position.x =
              p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
            camera.position.z =
              p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
            camera.lookAt(target)
          } else {
            controls.update()
          }

          renderer.render(scene, camera)
        }

        return () => {
          if (req !== null) {
            cancelAnimationFrame(req)
          }
          renderer.domElement.remove()
          renderer.dispose()
        }
      }
    }, [])

    useEffect(() => {
      window.addEventListener('resize', handleWindowResize, false)
      return () => {
        window.removeEventListener('resize', handleWindowResize, false)
      }
    }, [handleWindowResize])

    return (
      <CompContainer ref={refContainer}>
        {loading && <CompSpinner />}
        {error && (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
            width="100%"
            color="red.500"
          >
            <Box fontSize="lg" fontWeight="bold" mb={2}>
              Failed to load 3D model
            </Box>
            <Box fontSize="sm">
              Please try refreshing the page
            </Box>
          </Box>
        )}
      </CompContainer>
    )
  }

  export default VoxelComp

