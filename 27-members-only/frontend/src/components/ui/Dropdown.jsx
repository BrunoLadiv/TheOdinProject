export default function Dropdown() {
  return (
    <ul className="absolute visible w-48 py-1 mt-2 transition duration-300 translate-y-1/2 bg-white rounded shadow opacity-100 dark:bg-white">
      <li className="flex items-center px-3 py-3 text-sm font-normal leading-3 tracking-normal text-black cursor-pointer dark:black hover:bg-gray-100">
        <svg
          width={16}
          height={16}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2"
        >
          <path
            d="M8.00002 8C6.34689 8 4.89064 6.44687 4.75001 4.5375C4.67814 3.56875 4.97814 2.67188 5.59376 2.0125C6.20001 1.35938 7.05626 1 8.00002 1C8.93752 1 9.79064 1.3625 10.4 2.01875C11.0188 2.68437 11.3188 3.57812 11.2469 4.5375C11.1063 6.44687 9.65002 8 8.00002 8ZM8.00002 2C7.33752 2 6.74064 2.24687 6.32501 2.69375C5.90314 3.14687 5.69689 3.77812 5.74689 4.46562C5.84689 5.84062 6.87814 7.00313 7.99689 7.00313C9.11564 7.00313 10.1469 5.84062 10.2469 4.46562C10.2969 3.7875 10.0906 3.15938 9.66252 2.7C9.25002 2.24688 8.65627 2 8.00002 2Z"
            fill="#1F2937"
          />
          <path
            d="M13.5 14.9999H2.50002C2.20002 14.9999 1.93127 14.8749 1.74377 14.6531C1.54064 14.4093 1.45939 14.0781 1.51877 13.7437C1.78127 12.2812 2.60627 11.0499 3.90002 10.1906C5.05002 9.42494 6.50627 9.00307 8.00002 9.00307C9.49377 9.00307 10.95 9.42494 12.1 10.1906C13.3938 11.0531 14.2188 12.2812 14.4813 13.7437C14.5406 14.0781 14.4594 14.4093 14.2563 14.6531C14.0688 14.8749 13.8 14.9999 13.5 14.9999ZM2.50627 13.9999H13.4938C13.5 13.9843 13.5031 13.9593 13.4969 13.9187C13.0125 11.2281 10.3063 9.99994 8.00002 9.99994C5.69377 9.99994 2.98752 11.2281 2.50314 13.9187C2.49689 13.9593 2.50002 13.9843 2.50627 13.9999Z"
            fill="#1F2937"
          />
        </svg>
        <span className="ml-2">Join the club</span>
      </li>
      <li className="flex items-center px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-black hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-device-mobile"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <rect x={7} y={4} width={10} height={16} rx={1} />
          <line x1={11} y1={5} x2={13} y2={5} />
          <line x1={12} y1={17} x2={12} y2="17.01" />
        </svg>
        <span className="ml-2">My Posts</span>
      </li>
      <li>
        <hr className="my-1 border-gray-200 dark:border-gray-300" />
      </li>
      <li className="flex items-center px-3 py-3 text-sm font-normal leading-3 tracking-normal text-gray-600 cursor-pointer dark:text-black hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-x"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1={18} y1={6} x2={6} y2={18} />
          <line x1={6} y1={6} x2={18} y2={18} />
        </svg>
        <span className="ml-2">Sign Out</span>
      </li>
    </ul>
  )
}
