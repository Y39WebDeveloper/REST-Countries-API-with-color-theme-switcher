import React from 'react'

function SearchIcon({color}) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill={color}
  >
    <path
      fillRule="evenodd"
      d="M11.111 10H10.4l-.267-.267A5.564 5.564 0 0 0 11.556 6c0-3.2-2.578-5.778-5.778-5.778A5.766 5.766 0 0 0 0 6c0 3.2 2.578 5.778 5.778 5.778a5.564 5.564 0 0 0 3.733-1.422l.267.266v.711l4.444 4.445 1.334-1.334L11.11 10Zm-5.333 0c-2.222 0-4-1.778-4-4s1.778-4 4-4 4 1.778 4 4-1.778 4-4 4Z"
      clipRule="evenodd"
    />
  </svg>
  )
}

export default SearchIcon