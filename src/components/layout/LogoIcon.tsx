"use client"

import { createIcon } from "@chakra-ui/react"
import { IoIosAddCircleOutline } from "react-icons/io"

const Logo = createIcon({
    displayName: "LogoIcon",
    viewBox: "0 0 300 300",
    path: (
        <>
            <path fill="currentColor" d="M231.515,32.094c32.105,0 58.225,26.12 58.225,58.225l0,119.362c0,32.105 -26.12,58.225 -58.225,58.225l-163.03,-0c-32.105,-0 -58.225,-26.12 -58.225,-58.225l-0,-84.427c-0,-16.052 6.53,-30.609 17.073,-41.152c10.543,-10.543 25.099,-17.073 41.152,-17.073l48.571,0c3.121,0 6.044,-1.223 8.245,-3.412l21.287,-21.287c6.603,-6.603 15.383,-10.236 24.711,-10.236l60.216,0Zm34.935,177.587l0,-119.362c0,-19.261 -15.674,-34.935 -34.935,-34.935l-60.216,0c-3.121,0 -6.044,1.223 -8.245,3.412l-21.287,21.287c-6.603,6.603 -15.383,10.236 -24.711,10.236l-48.571,0c-19.261,0 -34.935,15.674 -34.935,34.935l-0,84.427c-0,19.261 15.674,34.935 34.935,34.935l163.03,-0c19.261,-0 34.935,-15.674 34.935,-34.935Z" />
            <path fill="currentColor" d="M198.322,177.504c0.076,4.659 -2.671,8.894 -6.966,10.7l-20.004,8.439l-7.983,19.973c-1.731,4.326 -5.92,7.164 -10.579,7.164c-4.659,-0 -8.848,-2.838 -10.579,-7.164l-7.937,-19.852l-19.852,-7.938c-4.326,-1.73 -7.164,-5.919 -7.164,-10.578c-0,-4.66 2.838,-8.849 7.164,-10.579l19.852,-7.938l7.937,-19.852c1.731,-4.325 5.92,-7.163 10.579,-7.163c4.659,-0 8.848,2.838 10.579,7.163l7.892,19.746l19.715,7.467c4.356,1.64 7.27,5.783 7.346,10.427l-0,-0.015Z"  style={{fillRule: 'nonzero'}} />
            <path fill="currentColor" d="M230.38,146.491c0.03,1.828 -1.048,3.49 -2.733,4.198l-7.848,3.311l-3.133,7.837c-0.678,1.697 -2.322,2.81 -4.15,2.81c-1.828,0 -3.472,-1.113 -4.15,-2.81l-3.115,-7.789l-7.789,-3.115c-1.697,-0.678 -2.81,-2.322 -2.81,-4.15c-0,-1.828 1.113,-3.472 2.81,-4.151l7.789,-3.114l3.115,-7.789c0.678,-1.697 2.322,-2.81 4.15,-2.81c1.828,-0 3.472,1.113 4.15,2.81l3.097,7.747l7.735,2.93c1.709,0.643 2.853,2.269 2.882,4.091l0,-0.006Z"  style={{fillRule: 'nonzero'}} />
            <path fill="currentColor" d="M204.184,107.567c0.047,2.871 -1.646,5.48 -4.292,6.593l-12.324,5.199l-4.918,12.305c-1.066,2.665 -3.647,4.413 -6.518,4.413c-2.87,0 -5.451,-1.748 -6.517,-4.413l-4.89,-12.231l-12.231,-4.89c-2.665,-1.066 -4.414,-3.647 -4.414,-6.517c0,-2.871 1.749,-5.452 4.414,-6.518l12.231,-4.89l4.89,-12.231c1.066,-2.665 3.647,-4.413 6.517,-4.413c2.871,-0 5.452,1.748 6.518,4.413l4.862,12.165l12.146,4.601c2.684,1.01 4.479,3.562 4.526,6.424l0,-0.01Z"  style={{fillRule: 'nonzero'}} />
        </>
    ),
})

export const LogoIcon = () => (
    <Logo boxSize="36px" color="blackAlpha.900" margin={1} />
)

IoIosAddCircleOutline