const PrintIcon = props => {
  return (
    <svg
      width={25}
      height={25}
      className="w-5 inline-block transition-transform group-hover:rotate-[20deg] color:white"
      viewBox="0 0 500 500"
      fill="currentColor"
      {...props}
    >
    <g>
	  <path d="M245,0C109.69,0,0,109.69,0,245s109.69,245,245,245s245-109.69,245-245S380.31,0,245,0z M245,459.375
		  c-118.206,0-214.375-96.168-214.375-214.375c0-118.206,96.169-214.375,214.375-214.375S459.375,126.794,459.375,245
		  C459.375,363.207,363.206,459.375,245,459.375z"/>
	  <polygon points="95.583,258.914 203.967,306.033 203.967,275.528 128.362,245.546 203.967,216.641 203.967,185.911 95.583,232.82 	
		  "/>
	  <polygon points="213.986,326.744 236.312,326.744 275.894,163.256 253.135,163.256 	"/>
	  <polygon points="285.928,216.431 361.638,245.86 285.928,275.633 285.928,306.153 394.416,258.914 394.416,233.03 285.928,186.12 	
		  "/>
      </g>
    </svg>
  )
}

export default PrintIcon