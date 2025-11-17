'use client';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Scene, Object3D, Mesh } from 'three';

interface LoadGLTFModelOptions {
    receiveShadow?: boolean;
    castShadow?: boolean;
}

export function loadGLTFModel(
    scene: Scene,
    glbPath: string,
    options: LoadGLTFModelOptions = { receiveShadow: true, castShadow: true }
): Promise<Object3D> {
    const { receiveShadow, castShadow } = options
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader()

        loader.load(
            glbPath,
            gltf => {
                const obj = gltf.scene
                obj.name = 'comp'
                obj.position.y = 0
                obj.position.x = 0
                obj.receiveShadow = receiveShadow
                obj.castShadow = castShadow
                scene.add(obj)

                obj.traverse(function (child) {
                    if((child as Mesh).isMesh) {
                        (child as Mesh).castShadow = castShadow
                        ;(child as Mesh).receiveShadow = receiveShadow

                    }
                })
                resolve(obj)
            },
            undefined,
            function (error) {
                reject (error)
            }
        )
    })
}

