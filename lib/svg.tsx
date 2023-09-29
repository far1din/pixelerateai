type SVGProps = {
    width?: number;
    height?: number;
    className?: string;
    onClick?: () => void;
};

export const GithubSVG = (props: SVGProps) => {
    return (
        <svg
            width={props.width}
            height={props.height}
            className={`${props.className}`}
            onClick={props.onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
        >
            <g>
                <g fillRule="evenodd" stroke="none" strokeWidth="1">
                    <g transform="translate(-140 -7559)">
                        <g transform="translate(56 160)">
                            <path d="M94 7399c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051a9.396 9.396 0 00-2.505-.345 9.375 9.375 0 00-2.503.345c-1.911-1.326-2.751-1.051-2.751-1.051-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493-3.974-1.355-6.839-5.199-6.839-9.729 0-5.663 4.478-10.253 10-10.253"></path>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

export const PixelerateLogoSVG = (props: SVGProps) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            className={`${props.className}`}
            onClick={props.onClick}
            viewBox="0 0 1080 1080"
        >
            <rect width="100%" height="100%" fill="transparent" />
            <path
                fill="#6C95C7"
                fillRule="evenodd"
                d="M250.495 154.97c2.771 1.509 5.911 2.033 9.42 1.57v199.39H60.525V154.97h189.97z"
                opacity="0.993"
                vectorEffect="non-scaling-stroke"
            />
            <path
                fill="#257D9E"
                fillRule="evenodd"
                d="M250.97 154.974c129.81-.497 259.598.027 389.36 1.57v199.39H260.39v-199.39c-3.509.463-6.649-.061-9.42-1.57z"
                opacity="0.992"
                vectorEffect="non-scaling-stroke"
            />
            <path
                fill="#257D9E"
                fillRule="evenodd"
                d="M1019.475 544.645h-199.39v-199.39h199.39v199.39z"
                vectorEffect="non-scaling-stroke"
            />
            <path
                fill="#AAABED"
                fillRule="evenodd"
                d="M60.525 356.25h199.39v188.4H60.525v-188.4z"
                vectorEffect="non-scaling-stroke"
            />
            <path
                fill="#6C95C7"
                fillRule="evenodd"
                d="M60.525 544.96h199.39v178.98H60.525V544.96zM820.085 545.12h199.39v379.94h-199.39V545.12z"
                vectorEffect="non-scaling-stroke"
            />
            <path
                fill="#AAABED"
                fillRule="evenodd"
                d="M819.61 724.25v200.96H439.67V724.25h379.94z"
                vectorEffect="non-scaling-stroke"
            />
        </svg>
    );
};

export const RobotSVG = (props: SVGProps) => {
    return (
        <svg
            width={props.width}
            height={props.height}
            className={`${props.className}`}
            onClick={props.onClick}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 400 400"
        >
            <g strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.9" strokeWidth="16">
                <path d="M268.515 54.605c-.604-.292-1.285-.359-1.945-.49a7.23 7.23 0 00-1.38-.115c-.8 0-1.617.085-2.375.123-2.781.131-5.556.32-8.337.478-3.915.113-7.832.032-11.748.116-4.553.098-9.088.352-13.631.634-2.567.075-5.134.066-7.705.099-2.977.041-5.954.21-8.931.374-2.28.08-4.549.093-6.831.041-2.165-.05-4.331-.159-6.496-.19-4.705-.068-9.406-.092-14.112-.17-4.838-.077-9.665-.027-14.507.092-4.572.117-9.149.236-13.725.215-2.117-.01-4.235-.155-6.352-.225a73.409 73.409 0 00-3.505-.008c-.822.011-1.643.022-2.46.011-1.134-.014-2.15.211-3.044.922a4.01 4.01 0 00-1.518 2.791M271.889 148.131c.334-.708.582-1.403.601-2.137.021-.596-.073-1.287-.2-1.896-.161-.812-2.048-77.704-2.215-80.075-.113-1.535-.187-3.067-.489-4.594-.274-1.378-.675-2.738-1.07-4.103" />
                <path d="M142.565 56.652c-.831.173-1.582.723-2.069 1.513-.529.86-.654 1.815-.549 2.837.129 1.227.206 2.454.266 3.686.114 6.352.99 66.433 1.145 69.193.079 2.152.138 4.306.232 6.461.112 2.612.205 5.225.696 7.789M142.562 150.783c1.562.253 3.076.388 4.648.371 1.565-.017 114.056 2.478 116.8 2.268a114.78 114.78 0 003.265-.31c.478-.052.956-.096 1.43-.174.737-.122 1.897-.741 2.459-1.331M196.653 98.026c-.356-3.499.189-7.725.337-10.881M220.116 98.026c.034-3.395.064-6.768.169-10.156M191.62 121.827c12.844 9.185 26.429 8.794 37.122-3.013M346.735 174.823c.171-2.08-51.03 15-52.202 14.392-.383-.199-30.639-13.988-49.203-13.428-24.373.736-57.862 1.873-83.256 2.744-20.639.708-47.973 10.684-48.678 10.684" />
                <path
                    fillRule="evenodd"
                    d="M109.413 188.988c.655 2.599-54.623-16.585-54.35-14.122.103.951 54.223 13.748 54.35 14.122z"
                    clipRule="evenodd"
                />
                <path d="M171.734 267.452c-.113 2.402-.298 10.553-.439 12.949-.141 2.385-.205 4.775-.3 7.164-.199 4.953-.824 41.109-1.025 43.77-.188 2.447-.387 4.898-.462 7.349-.048 1.436-.03 2.882.144 4.311.06.506-11.754 2.331-12.502 2.679M241.998 346.847c-.283-.026-6.768-.048-9.219.153-.506.04 2.283-41.174 2.215-50.815-.068-9.616-.109-17.79.038-27.407M362.021 164.677a4.164 4.164 0 00-1.836-2.509c-.999-.62-2.021-.665-3.144-.48-1.224.202-2.448.4-3.671.61-.485.081-.969.177-1.453.272-2.001.4-3.859 1.686-4.406 3.767-.453 1.728-.354 3.512-.403 5.284-.036 1.182-.073 2.363-.106 3.543a40.092 40.092 0 00.089 3.965 52.94 52.94 0 00.356 3.413c.066.491.136.979.21 1.466.163 1.028.259 2.2.802 3.104.768 1.278 1.715 2.218 3.059 2.861 1.336.64 2.714 1.039 4.154 1.352 1.107.239 2.143.203 3.154-.364a4.177 4.177 0 001.975-2.509M36.641 182.134a4.16 4.16 0 001.124 2.898c.804.858 1.78 1.166 2.912 1.277 1.235.122 2.468.246 3.704.36.49.048.982.08 1.474.113 2.036.132 4.164-.63 5.232-2.498.885-1.553 1.251-3.302 1.757-5.001.341-1.131.683-2.263 1.02-3.394.38-1.263.688-2.552.941-3.853.219-1.126.396-2.259.541-3.389.063-.491.122-.981.176-1.471.11-1.035.32-2.191.03-3.205-.41-1.433-1.082-2.586-2.214-3.555-1.125-.963-2.352-1.706-3.662-2.379-1.007-.518-2.018-.751-3.141-.465a4.18 4.18 0 00-2.558 1.912M167.19 183.088c-.65.924-.713 1.842-.646 2.926l.039.638c.399 9.216-.055 18.44.277 27.655.175 4.94.35 9.876.431 14.815.074 4.546.14 9.114-.235 13.649-.231 2.799-.463 5.595-.562 8.402-.098 2.731-.112 5.537.113 8.266.091 1.123.371 2.36 1.122 3.228 1.025 1.183 2.323 1.722 3.87 1.782 1.029.042 2.091-.159 3.112-.301a35.119 35.119 0 003.516-.666c1.276-.313 29.007-1.208 30.912-1.145 2.172.071 4.315.213 6.476.387 3.61.29 7.199.864 10.806 1.18 1.965.169 3.929.325 5.898.442 1.545.09 3.13.066 4.651.369l.295.064c.955.088 1.45-.1 2.33-.394 1.08-.357 1.982-1.502 2.361-2.558.427-1.185.23-2.489.126-3.733-.149-4.396-.066-8.77.196-13.161.069-1.145 1.721-14.015 2.562-28.861.877-15.471.943-32.934.973-33.732.024-.759.056-1.517.088-2.272.052-1.374.256-2.816-.369-4.095" />
                <path
                    stroke="#ef4444"
                    d="M201.994 238.437c-9.545-7.732-25.869-27.445-13.877-38.944 2.562-2.457 5.88-4.031 9.591-3.522 3.746.513 6.366 4.794 7.143 8.024.114.472.95 7.045 1.225 7.045.407 0 0-.783 0-1.175 0-1.372.251-2.563.407-3.914.403-3.472 2.918-6.854 6.123-8.61 7.926-4.343 14.007 1.511 14.898 9.197 1.91 16.485-17.638 24.684-19.388 33.073"
                />
                <path d="M291.748 183.081a8.3 8.3 0 00-.381 1.032c-.956 3.218-1.938 6.429-3.109 9.58l-.084.205c-.22.556-.436 1.114-.659 1.674M109.42 194.534c-.405 0-2.32-13.892-2.405-14.354-.057-.308-.139-.306-.246.005M177.037 303.283c-1.754-.006-3.511-.034-5.266-.034-.57 0-1.14.004-1.71.011-2.608.043-5.053.606-7.608 1.315M243.323 303.283c-1.754-.006-3.511-.034-5.266-.034-.57 0-1.14.004-1.71.011-2.608.043-5.053.606-7.608 1.315M271.165 96.425l13.549 1.326 8.989-1.326M133.286 95.763h-18.561M294.036 87.49v16.292M113.905 87.49v16.292" />
            </g>
        </svg>
    );
};

export const BrokenHeartSVG = (props: SVGProps) => {
    return (
        <svg
            width={props.width}
            height={props.height}
            className={props.className}
            onClick={props.onClick}
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
        >
            <path d="M20.16 4.61A6.27 6.27 0 0012 4a6.27 6.27 0 00-8.16 9.48l7.45 7.46a1 1 0 001.42 0l7.45-7.46a6.27 6.27 0 000-8.87zm-1.41 7.45L12 18.81l-6.75-6.75a4.26 4.26 0 015.54-6.45l-1.71 4a1 1 0 000 .83 1 1 0 00.65.53l2.77.7-1.4 2.89a1 1 0 00.46 1.34 1 1 0 00.44.1 1 1 0 00.9-.56l2-4a1 1 0 000-.86 1.05 1.05 0 00-.67-.55l-2.83-.71 1.45-3.39a4.26 4.26 0 015.92 6.13z"></path>
        </svg>
    );
};

export const PixelSmileySVG = (props: SVGProps) => {
    return (
        <svg
            width={props.width}
            height={props.height}
            className={props.className}
            onClick={props.onClick}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
        >
            <g>
                <path d="M249.2 159.2H773v75.4H249.2zM253 789h520.1v75.4H253zM119.2 308.7h66.9v405.8h-66.9zm720.7 0h66.9v405.8h-66.9z"></path>
                <path d="M186.1 234.6H253V310h-66.9zm520.1 314.9v72H319.8v-72H253v75.4h66.8v72h386.4v-72H773v-75.4zM186.1 713.6H253V789h-66.9zm163.4-378h66.9V411h-66.9zm260.1 0h66.9V411h-66.9zm163.4-101h66.9V310H773zm0 479h66.9V789H773zM947.6 411h66.9v75.4h-66.9zm0 125.7h66.9v75.4h-66.9zM11.5 411h66.9v75.4H11.5zm0 125.7h66.9v75.4H11.5z"></path>
            </g>
        </svg>
    );
};

export const CoinSVG = (props: SVGProps) => {
    return (
        <svg
            width={props.width}
            height={props.height}
            className={props.className}
            onClick={props.onClick}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
                <polygon
                    fill="#FFDE46"
                    points="478.609,166.957 478.609,100.174 445.217,100.174 445.217,66.783 411.826,66.783 411.826,33.391 345.043,33.391 345.043,0 166.957,0 166.957,33.391 100.174,33.391 100.174,66.783 66.783,66.783 66.783,100.174 33.391,100.174 33.391,166.957 0,166.957 0,345.043 33.391,345.043 33.391,411.826 66.783,411.826 66.783,445.217 100.174,445.217 100.174,478.609 166.957,478.609 166.957,512 345.043,512 345.043,478.609 411.826,478.609 411.826,445.217 445.217,445.217 445.217,411.826 478.609,411.826 478.609,345.043 512,345.043 512,166.957 "
                />
                <rect x="166.957" y="322.783" width="33.391" height="33.391" />
                <rect x="311.652" y="267.13" width="33.391" height="89.043" />
                <rect x="166.957" y="155.826" width="33.391" height="77.913" />
                <rect x="200.348" y="233.739" width="111.304" height="33.391" />
                <polygon points="267.13,122.435 267.13,77.913 233.739,77.913 233.739,122.435 200.348,122.435 200.348,155.826 311.652,155.826 311.652,122.435 " />
                <rect x="311.652" y="155.826" width="33.391" height="33.391" />
                <polygon points="200.348,356.174 200.348,389.565 233.739,389.565 233.739,434.087 267.13,434.087 267.13,389.565 311.652,389.565 311.652,356.174 " />
                <rect x="66.783" y="66.783" width="33.391" height="33.391" />
                <polygon points="411.826,33.391 345.043,33.391 345.043,0 166.957,0 166.957,33.391 100.174,33.391 100.174,66.783 166.957,66.783 166.957,33.391 345.043,33.391 345.043,66.783 411.826,66.783 411.826,100.174 445.217,100.174 445.217,66.783 411.826,66.783 " />
                <rect x="445.217" y="100.174" width="33.391" height="66.783" />
                <rect x="478.609" y="166.957" width="33.391" height="178.087" />
                <rect x="445.217" y="345.043" width="33.391" height="66.783" />
                <polygon points="33.391,166.957 0,166.957 0,345.043 33.391,345.043 33.391,411.826 66.783,411.826 66.783,445.217 100.174,445.217 100.174,411.826 66.783,411.826 66.783,345.043 33.391,345.043 33.391,166.957 66.783,166.957 66.783,100.174 33.391,100.174 " />
                <polygon points="166.957,478.609 166.957,512 345.043,512 345.043,478.609 411.826,478.609 411.826,445.217 345.043,445.217 345.043,478.609 166.957,478.609 166.957,445.217 100.174,445.217 100.174,478.609 " />
                <rect x="411.826" y="411.826" width="33.391" height="33.391" />
            </g>
        </svg>
    );
};

export const MovingStarsSVG = (props: SVGProps) => {
    return (
        <svg
            width={props.width}
            height={props.height}
            className={props.className}
            onClick={props.onClick}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 2560 1337"
        >
            <g transform="translate(1280,668.5) scale(1,1) translate(-1280,-668.5)">
                <g transform="translate(2473.876966697835 427.43167559423654)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3667.7539333956706 186.36335118847308"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.3578315339718094s"
                    />
                    <g transform="rotate(168.5842981720907)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.3578315339718094s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.3578315339718094s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.3578315339718094s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1556.7468003122358 1321.188122542799)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1833.4936006244716 1973.876245085598"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.3348024883599696s"
                    />
                    <g transform="rotate(67.02253194053606)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.3348024883599696s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.3348024883599696s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.3348024883599696s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1236.3570527178242 0.3886922630591698)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1192.7141054356484 -667.7226154738817"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.13585467554647335s"
                    />
                    <g transform="rotate(86.26258522383432)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.13585467554647335s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.13585467554647335s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.13585467554647335s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(223.01456407982687 291.46118848621995)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-833.9708718403463 -85.5776230275601"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.869725290693552s"
                    />
                    <g transform="rotate(19.6318995810511)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.869725290693552s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.869725290693552s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.869725290693552s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2392.8241570416903 998.8190304106388)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3505.648314083381 1329.1380608212776"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.7960594002540624s"
                    />
                    <g transform="rotate(16.53244165837626)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.7960594002540624s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.7960594002540624s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.7960594002540624s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2394.6974045153447 997.0917081478883)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3509.3948090306894 1325.6834162957766"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.8533678101593616s"
                    />
                    <g transform="rotate(16.42451968892465)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.8533678101593616s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.8533678101593616s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.8533678101593616s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(477.9611274276134 147.50668924644026)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-324.0777451447732 -373.4866215071195"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.4561530581273612s"
                    />
                    <g transform="rotate(33.007193619387955)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4561530581273612s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4561530581273612s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4561530581273612s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(774.1399230587483 54.42009088248824)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;268.2798461174966 -559.6598182350235"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.4824989183165975s"
                    />
                    <g transform="rotate(50.51935659924877)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.4824989183165975s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.4824989183165975s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.4824989183165975s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2283.3432247051333 253.40481445914804)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3286.686449410267 -161.69037108170392"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.6775474729785498s"
                    />
                    <g transform="rotate(157.52453065838526)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.6775474729785498s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.6775474729785498s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.6775474729785498s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2529.327225393923 523.0309900862301)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3778.654450787846 377.56198017246004"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.3925990781464827s"
                    />
                    <g transform="rotate(173.35850794384183)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.3925990781464827s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.3925990781464827s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.3925990781464827s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1527.2948484980916 12.594825476996334)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1774.5896969961834 -643.3103490460073"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.9277654183301566s"
                    />
                    <g transform="rotate(110.6578653341136)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9277654183301566s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9277654183301566s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9277654183301566s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1469.6596601296062 1329.620872817821)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1659.3193202592124 1990.741745635642"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.8085308869489067s"
                    />
                    <g transform="rotate(73.993089285914)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8085308869489067s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8085308869489067s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8085308869489067s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(751.8191629278541 1277.4323805443926)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;223.63832585570822 1886.3647610887851"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.6595586859609215s"
                    />
                    <g transform="rotate(130.937987183148)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.6595586859609215s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.6595586859609215s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.6595586859609215s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1452.9883110209798 1330.8668754412097)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1625.9766220419594 1993.2337508824191"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.021205983418131562s"
                    />
                    <g transform="rotate(75.36317601609112)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.021205983418131562s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.021205983418131562s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.021205983418131562s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(291.2679551929433 1093.0505404363566)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-697.4640896141134 1517.6010808727135"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.894687732302099s"
                    />
                    <g transform="rotate(156.7618526589624)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.894687732302099s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.894687732302099s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.894687732302099s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2483.5418266065744 440.91735506301745)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3687.083653213149 213.33471012603496"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.3061995281198351s"
                    />
                    <g transform="rotate(169.29213763507724)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.3061995281198351s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.3061995281198351s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.3061995281198351s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1362.298331339042 1.3831939097374288)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1444.5966626780842 -665.7336121805251"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.2643643996729343s"
                    />
                    <g transform="rotate(97.03271534519057)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.2643643996729343s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.2643643996729343s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.2643643996729343s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1531.2083352273212 1323.999406340883)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1782.4166704546421 1979.4988126817664"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.815529286624852s"
                    />
                    <g transform="rotate(69.03156988265347)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.815529286624852s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.815529286624852s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.815529286624852s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2507.0276541987614 478.17510146159356)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3734.055308397523 287.8502029231871"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.0100914739000157s"
                    />
                    <g transform="rotate(171.18308330539767)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.0100914739000157s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.0100914739000157s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.0100914739000157s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2434.7781337356537 380.12259837195325)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3589.556267471308 91.74519674390649"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.8784982734033377s"
                    />
                    <g transform="rotate(165.97856680278682)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8784982734033377s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8784982734033377s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8784982734033377s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2490.0307356323074 886.4954603991644)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3700.0614712646143 1104.4909207983287"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.5766557343109955s"
                    />
                    <g transform="rotate(10.212684466885248)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5766557343109955s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5766557343109955s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5766557343109955s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(6.942796422067886 598.9673261564247)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1266.1144071558642 529.4346523128495"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.5564062374497056s"
                    />
                    <g transform="rotate(3.126312155198986)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5564062374497056s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5564062374497056s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5564062374497056s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1947.8415378890513 98.2041883284246)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2615.6830757781026 -472.0916233431508"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.3955144459127107s"
                    />
                    <g transform="rotate(139.50470040377985)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.3955144459127107s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.3955144459127107s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.3955144459127107s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(821.9293181538721 1292.7267777523375)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;363.8586363077444 1916.9535555046748"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.2672236357489407s"
                    />
                    <g transform="rotate(126.27200122147724)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.2672236357489407s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.2672236357489407s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.2672236357489407s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(340.5068396214351 214.47343154658068)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-598.9863207571298 -239.55313690683863"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.3932460240936322s"
                    />
                    <g transform="rotate(25.79297159473191)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.3932460240936322s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.3932460240936322s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.3932460240936322s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(608.1483144029257 99.49038816257496)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-63.70337119414853 -469.5192236748501"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.7216812769923713s"
                    />
                    <g transform="rotate(40.262177644809405)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7216812769923713s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7216812769923713s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7216812769923713s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2426.116752059108 370.84689997747586)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3572.2335041182155 73.19379995495171"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.9571895019274862s"
                    />
                    <g transform="rotate(165.44157719259468)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9571895019274862s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9571895019274862s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9571895019274862s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2353.600335850545 1032.5091443317754)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3427.2006717010895 1396.5182886635507"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.3602533833182389s"
                    />
                    <g transform="rotate(18.72946528304462)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.3602533833182389s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.3602533833182389s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.3602533833182389s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2547.3901508574945 762.1039379597801)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3814.780301714989 855.7078759195601"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.3338494527234483s"
                    />
                    <g transform="rotate(4.223948769708913)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.3338494527234483s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.3338494527234483s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.3338494527234483s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2430.357218954965 961.657269001621)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3580.7144379099295 1254.814538003242"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.3340274616928314s"
                    />
                    <g transform="rotate(14.296954908302904)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.3340274616928314s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.3340274616928314s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.3340274616928314s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2.17876068858709 629.5119690690897)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1275.6424786228258 590.5239381381792"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.904661954977883s"
                    />
                    <g transform="rotate(1.7476285004888559)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.904661954977883s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.904661954977883s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.904661954977883s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1817.5995827548131 61.820035383797745)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2355.1991655096263 -544.8599292324045"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.110151521004295s"
                    />
                    <g transform="rotate(131.5452354571132)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.110151521004295s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.110151521004295s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.110151521004295s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2356.472038243982 1030.188440521225)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3432.944076487964 1391.8768810424497"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.489511738620113s"
                    />
                    <g transform="rotate(18.57205369387022)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.489511738620113s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.489511738620113s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.489511738620113s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1498.3955493038127 9.802455549743172)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1716.7910986076254 -648.8950889005137"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.377071817293777s"
                    />
                    <g transform="rotate(108.34328308330066)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.377071817293777s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.377071817293777s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.377071817293777s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(131.28934167867578 373.58689840327094)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1017.4213166426484 78.67379680654187"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.262178868824852s"
                    />
                    <g transform="rotate(14.39879898379512)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.262178868824852s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.262178868824852s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.262178868824852s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(585.1772648673013 107.0653356956409)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-109.64547026539731 -454.3693286087182"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.3091870922690463s"
                    />
                    <g transform="rotate(38.939103943376836)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.3091870922690463s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.3091870922690463s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.3091870922690463s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(279.5481593104149 1085.494390697966)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-720.9036813791702 1502.4887813959324"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.1322373458458368s"
                    />
                    <g transform="rotate(157.3733301590163)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.1322373458458368s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.1322373458458368s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.1322373458458368s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(46.33118534055825 490.26943812220645)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1187.3376293188835 312.03887624441296"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.5751877361394733s"
                    />
                    <g transform="rotate(8.220754012957547)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5751877361394733s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5751877361394733s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5751877361394733s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2457.704025113648 406.63014659221614)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3635.4080502272964 144.76029318443227"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.7706399241035693s"
                    />
                    <g transform="rotate(167.4638745193375)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.7706399241035693s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.7706399241035693s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.7706399241035693s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(562.149980349416 115.02375865747422)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-155.7000393011681 -438.45248268505156"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.9204801249020602s"
                    />
                    <g transform="rotate(37.63291785924362)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9204801249020602s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9204801249020602s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9204801249020602s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1352.2215031912524 1335.9350466413512)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1424.443006382505 2003.3700932827026"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.1610468840155121s"
                    />
                    <g transform="rotate(83.82419386273506)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.1610468840155121s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.1610468840155121s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.1610468840155121s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(242.58251059977556 1060.0825455772388)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-794.8349788004489 1451.6650911544775"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.24452662252858057s"
                    />
                    <g transform="rotate(159.3205355573482)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.24452662252858057s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.24452662252858057s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.24452662252858057s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1520.9071308002765 11.946724657076402)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1761.814261600553 -644.6065506858472"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.7991958087057376s"
                    />
                    <g transform="rotate(110.14945115792571)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7991958087057376s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7991958087057376s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7991958087057376s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2559.7690679665056 681.1979591397273)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3839.5381359330117 693.8959182794546"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.2019029615747434s"
                    />
                    <g transform="rotate(0.5684741192339927)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.2019029615747434s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.2019029615747434s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.2019029615747434s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1135.7367266412743 1332.740596126958)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;991.4734532825488 1996.981192253916"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.7353894171183195s"
                    />
                    <g transform="rotate(102.2535010712385)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.7353894171183195s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.7353894171183195s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.7353894171183195s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2414.700976184449 359.1469023879165)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3549.4019523688976 49.793804775832996"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.609826009069021s"
                    />
                    <g transform="rotate(164.75008908474896)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.609826009069021s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.609826009069021s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.609826009069021s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(4.689002383110619 611.3319273552235)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1270.6219952337788 554.1638547104469"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.15830826342712s"
                    />
                    <g transform="rotate(2.5666664580805856)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.15830826342712s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.15830826342712s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.15830826342712s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2316.305826338795 276.11539046369853)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3352.6116526775904 -116.26921907260294"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.0349940639575923s"
                    />
                    <g transform="rotate(159.26143753726674)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.0349940639575923s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.0349940639575923s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.0349940639575923s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(891.1238656220368 31.598119103411932)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;502.2477312440735 -605.3037617931761"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.13712039259249312s"
                    />
                    <g transform="rotate(58.59281956092215)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.13712039259249312s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.13712039259249312s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.13712039259249312s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(18.935940843571416 553.9374444680026)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1242.1281183128572 439.37488893600516"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.5623243181499997s"
                    />
                    <g transform="rotate(5.190840520632593)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5623243181499997s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5623243181499997s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5623243181499997s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1681.7796419398078 1303.2135029002816)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2083.5592838796156 1937.9270058005632"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.8849665641284412s"
                    />
                    <g transform="rotate(57.66580325542815)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.8849665641284412s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.8849665641284412s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.8849665641284412s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1675.5803177124376 1304.2747365413625)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2071.160635424875 1940.0494730827247"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.9912014250404s"
                    />
                    <g transform="rotate(58.11004314123433)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.9912014250404s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.9912014250404s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.9912014250404s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2410.1526797065035 354.63838140426975)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3540.3053594130074 40.7767628085395"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.8823923933113473s"
                    />
                    <g transform="rotate(164.47916865995708)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.8823923933113473s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.8823923933113473s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.8823923933113473s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2311.263640985706 272.5085380979965)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3342.527281971412 -123.48292380400699"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.3370983892337048s"
                    />
                    <g transform="rotate(158.99387760544792)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.3370983892337048s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.3370983892337048s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.3370983892337048s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(13.85423050147324 766.589896969507)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1252.2915389970535 864.679793939014"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.6845467618244565s"
                    />
                    <g transform="rotate(175.57007263754016)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.6845467618244565s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.6845467618244565s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.6845467618244565s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2041.0130549112553 130.9825720187024)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2802.0261098225105 -406.5348559625952"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.678385374069652s"
                    />
                    <g transform="rotate(144.76574024251448)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.678385374069652s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.678385374069652s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.678385374069652s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2.755547443995056 624.6588930670111)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1274.48890511201 580.8177861340223"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.3197949103548807s"
                    />
                    <g transform="rotate(1.9658919531426726)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.3197949103548807s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.3197949103548807s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.3197949103548807s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(294.6522235860567 241.80874161549167)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-690.6955528278866 -184.88251676901666"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.7571969482472632s"
                    />
                    <g transform="rotate(23.414358277404336)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7571969482472632s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7571969482472632s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7571969482472632s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1987.8652854723393 1225.4729023403124)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2695.7305709446787 1782.4458046806249"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.9346154236738526s"
                    />
                    <g transform="rotate(38.1968931812682)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.9346154236738526s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.9346154236738526s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.9346154236738526s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(840.6492062341046 1296.3864230601794)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;401.2984124682091 1924.2728461203585"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.77568556026068s"
                    />
                    <g transform="rotate(124.98162582457307)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.77568556026068s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.77568556026068s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.77568556026068s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2557.05814694551 713.7972912101758)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3834.1162938910197 759.0945824203516"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.5028817938795203s"
                    />
                    <g transform="rotate(2.031431392740048)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5028817938795203s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5028817938795203s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5028817938795203s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(865.0500140479612 36.1019901213117)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;450.10002809592254 -596.2960197573766"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.2414282474462137s"
                    />
                    <g transform="rotate(56.72898835780609)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.2414282474462137s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.2414282474462137s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.2414282474462137s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(414.8386746183472 1161.1755842290004)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-450.32265076330555 1653.8511684580005"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.041994894887316s"
                    />
                    <g transform="rotate(150.34017694050738)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.041994894887316s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.041994894887316s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.041994894887316s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1924.2882295098352 1246.1391629274476)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2568.5764590196704 1823.7783258548955"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.5069485060814811s"
                    />
                    <g transform="rotate(41.87794052676334)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5069485060814811s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5069485060814811s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5069485060814811s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2555.600411333734 723.8788526786108)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3831.2008226674684 779.2577053572215"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.31498184632455833s"
                    />
                    <g transform="rotate(2.4858751316901695)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.31498184632455833s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.31498184632455833s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.31498184632455833s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1513.0074099198787 11.169515837714926)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1746.0148198397574 -646.1609683245701"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.1904722371981849s"
                    />
                    <g transform="rotate(109.51815866012566)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.1904722371981849s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.1904722371981849s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.1904722371981849s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(340.7294781623027 1122.6521957588368)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-598.5410436753946 1576.8043915176736"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.7616338771996127s"
                    />
                    <g transform="rotate(154.1954964753992)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7616338771996127s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7616338771996127s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7616338771996127s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1725.5241602611777 41.80122205525663)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2171.0483205223554 -584.8975558894867"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.06702053032475606s"
                    />
                    <g transform="rotate(125.40926390766374)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.06702053032475606s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.06702053032475606s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.06702053032475606s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1160.6970344942586 1334.0899513538193)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1041.3940689885171 1999.6799027076388"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.4482833650661602s"
                    />
                    <g transform="rotate(100.16200865674249)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4482833650661602s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4482833650661602s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4482833650661602s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(173.97630270722084 1004.9913207851007)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-932.0473945855583 1341.4826415702014"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.0765776310901163s"
                    />
                    <g transform="rotate(163.07839401363563)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0765776310901163s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0765776310901163s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0765776310901163s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2516.6718197881246 840.960626540364)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3753.3436395762496 1013.421253080728"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.31061627040856s"
                    />
                    <g transform="rotate(7.939007528952622)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.31061627040856s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.31061627040856s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.31061627040856s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1164.6844025797309 2.7183882832628115)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1049.3688051594615 -663.0632234334744"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.168558289957548s"
                    />
                    <g transform="rotate(80.173667137513)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.168558289957548s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.168558289957548s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.168558289957548s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2517.1712932163864 839.9807236584542)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3754.342586432773 1011.4614473169083"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.9806879166520972s"
                    />
                    <g transform="rotate(7.891322264036801)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.9806879166520972s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.9806879166520972s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.9806879166520972s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(40.08659338894199 834.4907265828699)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1199.826813222116 1000.4814531657397"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.94949267226562s"
                    />
                    <g transform="rotate(172.3749873778862)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.94949267226562s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.94949267226562s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.94949267226562s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2083.0559877835512 147.934222425877)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2886.1119755671025 -372.631555148246"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.6417862065953421s"
                    />
                    <g transform="rotate(147.04744265898816)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.6417862065953421s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.6417862065953421s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.6417862065953421s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2281.6608652356404 1084.7019638839665)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3283.3217304712807 1500.903927767933"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.1388538045768573s"
                    />
                    <g transform="rotate(22.56346383779275)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.1388538045768573s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.1388538045768573s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.1388538045768573s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1544.8253724992112 1322.5357928474023)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1809.6507449984224 1976.5715856948043"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.48474868012520866s"
                    />
                    <g transform="rotate(67.95650226343655)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.48474868012520866s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.48474868012520866s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.48474868012520866s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(34.02421970252203 515.3912115137321)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1211.951560594956 362.2824230274641"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.24053276336702664s"
                    />
                    <g transform="rotate(7.005535774563687)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.24053276336702664s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.24053276336702664s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.24053276336702664s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2525.3618171131375 822.9652520046972)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3770.7236342262754 977.4305040093943"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.4803263445780916s"
                    />
                    <g transform="rotate(7.070425056176903)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.4803263445780916s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.4803263445780916s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.4803263445780916s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2488.7456798785765 888.4314319205282)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3697.491359757153 1108.3628638410564"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.1469085268949932s"
                    />
                    <g transform="rotate(10.312164373710797)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.1469085268949932s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.1469085268949932s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.1469085268949932s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1644.2054659459177 27.632114360735613)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2008.4109318918356 -613.2357712785288"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.18971986985789693s"
                    />
                    <g transform="rotate(119.60958595742595)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.18971986985789693s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.18971986985789693s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.18971986985789693s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1331.445530370233 0.5401598110026953)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1382.891060740466 -667.4196803779946"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.0815152400634136s"
                    />
                    <g transform="rotate(94.40416312670865)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.0815152400634136s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.0815152400634136s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.0815152400634136s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1278.142143802248 0.000704167369804054)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1276.2842876044963 -668.4985916652604"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.5995956389481565s"
                    />
                    <g transform="rotate(89.8407671546036)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.5995956389481565s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.5995956389481565s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.5995956389481565s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(630.5792695270889 1244.5693336719123)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-18.84146094582229 1820.6386673438249"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.4024474854213755s"
                    />
                    <g transform="rotate(138.42533771598175)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.4024474854213755s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.4024474854213755s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.4024474854213755s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2227.40783066492 1118.018244380597)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3174.8156613298397 1567.5364887611938"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.4816153121870093s"
                    />
                    <g transform="rotate(25.383017964349385)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.4816153121870093s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.4816153121870093s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.4816153121870093s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1264.8531040255943 1336.9531926594234)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1249.7062080511885 2005.4063853188468"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.4180567945483613s"
                    />
                    <g transform="rotate(91.29807850694036)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.4180567945483613s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.4180567945483613s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.4180567945483613s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(98.43849779670018 411.41349732170056)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1083.1230044065996 154.32699464340112"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.683061033501275s"
                    />
                    <g transform="rotate(12.275205757822674)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.683061033501275s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.683061033501275s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.683061033501275s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(610.57673045714 98.71024092329378)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-58.846539085719996 -471.07951815341244"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.4125935968035455s"
                    />
                    <g transform="rotate(40.40327092961951)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4125935968035455s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4125935968035455s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4125935968035455s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(329.70184433428494 1116.3510459689123)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-620.5963113314301 1564.202091937825"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.4187717540194313s"
                    />
                    <g transform="rotate(154.7667055957208)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4187717540194313s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4187717540194313s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4187717540194313s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1769.8394673143168 50.88754362151792)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2259.6789346286337 -566.7249127569642"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.8153867783172178s"
                    />
                    <g transform="rotate(128.4185620950335)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8153867783172178s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8153867783172178s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8153867783172178s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(67.4835251185857 882.6950060490666)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1145.0329497628286 1096.8900120981332"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.6729808917308125s"
                    />
                    <g transform="rotate(169.98186946889098)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.6729808917308125s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.6729808917308125s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.6729808917308125s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1695.4633249583853 36.19392758765741)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2110.9266499167707 -596.1121448246852"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.214325628343212s"
                    />
                    <g transform="rotate(123.30733392005082)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.214325628343212s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.214325628343212s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.214325628343212s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(292.88186691183455 1094.0736785908239)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-694.2362661763309 1519.6473571816477"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.7162395899380893s"
                    />
                    <g transform="rotate(156.6778019170124)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.7162395899380893s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.7162395899380893s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.7162395899380893s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(16.6902497737899 776.1025313136959)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1246.6195004524202 883.7050626273918"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.3083190070845965s"
                    />
                    <g transform="rotate(175.1315768368138)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.3083190070845965s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.3083190070845965s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.3083190070845965s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2390.510176202275 1000.9363876111315)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3501.02035240455 1333.372775222263"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.8955440483443485s"
                    />
                    <g transform="rotate(16.66531554856201)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8955440483443485s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8955440483443485s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8955440483443485s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(97.34900998736771 924.2164373993061)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1085.3019800252646 1179.9328747986121"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.8552364567577417s"
                    />
                    <g transform="rotate(167.79915567421014)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8552364567577417s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8552364567577417s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8552364567577417s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(251.1993764451388 1066.2351155198023)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-777.6012471097224 1463.9702310396046"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.7214535005659966s"
                    />
                    <g transform="rotate(158.86345968134725)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.7214535005659966s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.7214535005659966s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.7214535005659966s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(857.3550245423546 1299.5065120115833)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;434.7100490847092 1930.5130240231663"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.946231697309513s"
                    />
                    <g transform="rotate(123.81397590229456)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.946231697309513s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.946231697309513s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.946231697309513s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2224.494933678495 1119.6871203931414)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3168.9898673569896 1570.8742407862828"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.7604559168499521s"
                    />
                    <g transform="rotate(25.533899522088248)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7604559168499521s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7604559168499521s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7604559168499521s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(299.6713902138539 238.66688189332103)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-680.6572195722922 -191.16623621335793"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.8504792459587005s"
                    />
                    <g transform="rotate(23.675442219290105)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8504792459587005s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8504792459587005s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8504792459587005s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2530.5489270050844 811.0769671529922)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3781.0978540101687 953.6539343059844"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.17430029881624s"
                    />
                    <g transform="rotate(6.504292883520981)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.17430029881624s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.17430029881624s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.17430029881624s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2332.571494261603 288.108001625856)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3385.1429885232064 -92.28399674828802"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.5977166915000502s"
                    />
                    <g transform="rotate(160.1304976669343)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.5977166915000502s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.5977166915000502s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.5977166915000502s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2312.3032390201797 273.2480697837418)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3344.60647804036 -122.00386043251638"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.2205766332927612s"
                    />
                    <g transform="rotate(159.04897888175628)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.2205766332927612s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.2205766332927612s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.2205766332927612s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2334.984652411055 1047.0641880891048)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3389.9693048221097 1425.6283761782097"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.41663903728703156s"
                    />
                    <g transform="rotate(19.739703918806686)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.41663903728703156s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.41663903728703156s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.41663903728703156s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(676.9710523116115 1258.1645094381195)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;73.94210462322303 1847.829018876239"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.6995478603072327s"
                    />
                    <g transform="rotate(135.6419871405507)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.6995478603072327s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.6995478603072327s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.6995478603072327s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2553.2583215045706 737.0208653044351)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3826.5166430091417 805.5417306088702"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.0518929332361813s"
                    />
                    <g transform="rotate(3.0804220298358507)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.0518929332361813s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.0518929332361813s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.0518929332361813s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(70.5141031567232 449.6813821986639)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1138.9717936865536 230.86276439732785"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.4623276550343975s"
                    />
                    <g transform="rotate(10.2549513158585)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4623276550343975s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4623276550343975s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4623276550343975s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(413.60652959237416 1160.5846346120943)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-452.7869408152517 1652.6692692241886"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.5818731657969454s"
                    />
                    <g transform="rotate(150.40476781259022)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5818731657969454s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5818731657969454s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5818731657969454s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1165.8617342823613 1334.3369463782228)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1051.723468564723 2000.1738927564454"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.2752357992018504s"
                    />
                    <g transform="rotate(99.72714295821602)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.2752357992018504s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.2752357992018504s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.2752357992018504s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(456.365034652438 156.77950223195188)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-367.269930695124 -354.94099553609624"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.0759130324481523s"
                    />
                    <g transform="rotate(31.852488188635817)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0759130324481523s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0759130324481523s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0759130324481523s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2045.1777795512814 1204.4022944003693)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2810.355559102563 1740.3045888007387"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.277096687555056s"
                    />
                    <g transform="rotate(35.005980934625505)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.277096687555056s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.277096687555056s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.277096687555056s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(4.008808056923726 721.3662797401724)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1271.9823838861525 774.2325594803449"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.5813379259297817s"
                    />
                    <g transform="rotate(177.62750453511083)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.5813379259297817s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.5813379259297817s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.5813379259297817s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(597.9017381472148 102.8253374486975)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-84.19652370557037 -462.849325102605"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.5652009300709747s"
                    />
                    <g transform="rotate(39.66944381056867)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.5652009300709747s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.5652009300709747s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.5652009300709747s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1189.7313500790146 1335.3355668326135)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1099.4627001580293 2002.1711336652268"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.5657433444587553s"
                    />
                    <g transform="rotate(97.70919242685812)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.5657433444587553s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.5657433444587553s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.5657433444587553s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(474.5950796681436 1188.075009934798)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-330.80984066371275 1707.6500198695956"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.7499421466704437s"
                    />
                    <g transform="rotate(147.17352113658947)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.7499421466704437s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.7499421466704437s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.7499421466704437s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(116.66453788362173 947.3382983048133)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1046.6709242327565 1226.1765966096266"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.12966754732238614s"
                    />
                    <g transform="rotate(166.52113576257236)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.12966754732238614s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.12966754732238614s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.12966754732238614s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1332.3416302553378 1336.440850897473)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1384.6832605106756 2004.381701794946"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.9379543884373662s"
                    />
                    <g transform="rotate(85.51930615957326)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.9379543884373662s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.9379543884373662s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.9379543884373662s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1789.943658601945 55.34203624682743)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2299.88731720389 -557.8159275063451"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.603956903268426s"
                    />
                    <g transform="rotate(129.74920255238547)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.603956903268426s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.603956903268426s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.603956903268426s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(903.4751254927301 29.576999074480568)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;526.95025098546 -609.3460018510389"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.774850207603157s"
                    />
                    <g transform="rotate(59.48865252403121)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.774850207603157s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.774850207603157s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.774850207603157s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(538.4082094681037 1213.3713982357658)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-203.18358106379264 1758.2427964715316"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.2416437816901156s"
                    />
                    <g transform="rotate(143.69407537740983)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.2416437816901156s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.2416437816901156s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.2416437816901156s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2340.7391984714195 1042.6523304568484)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3401.4783969428395 1416.8046609136968"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.8503866764267016s"
                    />
                    <g transform="rotate(19.429168828074154)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.8503866764267016s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.8503866764267016s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.8503866764267016s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(980.9716364516008 18.498090034754796)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;681.9432729032017 -631.5038199304904"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.9212095863730086s"
                    />
                    <g transform="rotate(65.29557020071385)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9212095863730086s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9212095863730086s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9212095863730086s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1998.6060959095644 1221.7085607395381)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2717.2121918191287 1774.9171214790763"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.8865616536400236s"
                    />
                    <g transform="rotate(37.590357582205876)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.8865616536400236s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.8865616536400236s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.8865616536400236s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2338.9882898263754 292.99726179564055)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3397.976579652751 -82.50547640871889"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.9705920372454593s"
                    />
                    <g transform="rotate(160.47619086609717)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.9705920372454593s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.9705920372454593s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.9705920372454593s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1251.3513291744744 0.16746144367323268)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1222.7026583489485 -668.1650771126535"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.4571786454461377s"
                    />
                    <g transform="rotate(87.54546792086046)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4571786454461377s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4571786454461377s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4571786454461377s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2550.8160413669125 588.5633449713145)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3821.632082733825 508.6266899426289"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.3904579675789877s"
                    />
                    <g transform="rotate(176.40073260168384)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.3904579675789877s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.3904579675789877s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.3904579675789877s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1142.6355710018618 1333.1393903352482)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1005.2711420037235 1997.7787806704962"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.6408468476150606s"
                    />
                    <g transform="rotate(101.67720259933137)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.6408468476150606s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.6408468476150606s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.6408468476150606s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1533.723251343938 13.264849245833261)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1787.446502687876 -641.9703015083335"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.1563719796013223s"
                    />
                    <g transform="rotate(111.16763524747877)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.1563719796013223s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.1563719796013223s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.1563719796013223s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(593.9425783874242 1232.8672071169842)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-92.11484322515162 1797.2344142339684"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.2811299396005111s"
                    />
                    <g transform="rotate(140.55847037610363)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.2811299396005111s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.2811299396005111s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.2811299396005111s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(924.6561929561872 26.27661005939251)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;569.3123859123745 -615.946779881215"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.7533669838078332s"
                    />
                    <g transform="rotate(61.04413494145057)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7533669838078332s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7533669838078332s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7533669838078332s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(97.63322319445956 924.5746730542426)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1084.7335536110809 1180.6493461084851"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.5006708115214324s"
                    />
                    <g transform="rotate(167.77972793424271)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5006708115214324s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5006708115214324s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.5006708115214324s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1408.3194244086485 3.3676859083666386)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1536.638848817297 -661.7646281832667"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.37269821265185504s"
                    />
                    <g transform="rotate(100.9195289635901)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.37269821265185504s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.37269821265185504s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.37269821265185504s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(24.70343780970188 537.7973107698787)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1230.5931243805962 407.0946215397574"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.11987142940370209s"
                    />
                    <g transform="rotate(5.944272628438522)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.11987142940370209s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.11987142940370209s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.11987142940370209s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1586.7514750411565 19.480456842521676)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1893.502950082313 -629.5390863149566"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.9009298664231127s"
                    />
                    <g transform="rotate(115.29721050838491)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.9009298664231127s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.9009298664231127s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.9009298664231127s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(180.0694751306546 1010.3956938554472)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-919.8610497386908 1352.2913877108945"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.445103980393586s"
                    />
                    <g transform="rotate(162.73298418314954)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.445103980393586s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.445103980393586s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.445103980393586s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2141.6887113712282 1162.8327776068224)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3003.377422742456 1657.165555213645"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.385581677207157s"
                    />
                    <g transform="rotate(29.841991004300745)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.385581677207157s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.385581677207157s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.385581677207157s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(80.48898491529144 901.815014655679)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1119.0220301694171 1135.130029311358"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.5623744248588705s"
                    />
                    <g transform="rotate(168.9929261728523)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.5623744248588705s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.5623744248588705s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.5623744248588705s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2347.1399439813285 1037.6543753492908)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3414.279887962657 1406.8087506985817"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.1239970169425475s"
                    />
                    <g transform="rotate(19.081973588315105)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.1239970169425475s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.1239970169425475s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.1239970169425475s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(544.205203098263 1215.5108576418738)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-191.58959380347392 1762.5217152837477"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.9707500414344998s"
                    />
                    <g transform="rotate(143.37183394737679)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9707500414344998s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9707500414344998s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9707500414344998s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2131.7899599959956 1167.4902629179069)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2983.5799199919916 1666.480525835814"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.0609929619497018s"
                    />
                    <g transform="rotate(30.36235809087382)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0609929619497018s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0609929619497018s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0609929619497018s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2227.424850108796 218.99153984647813)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3174.8497002175923 -230.51692030704373"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.3255684696520813s"
                    />
                    <g transform="rotate(154.61786363204592)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.3255684696520813s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.3255684696520813s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.3255684696520813s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2051.404374315893 1201.961879653135)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2822.8087486317863 1735.4237593062696"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.9040826736692893s"
                    />
                    <g transform="rotate(34.665654764411514)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.9040826736692893s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.9040826736692893s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.9040826736692893s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1028.2623714823196 13.055981782398248)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;776.5247429646394 -642.3880364352035"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.7515683884609885s"
                    />
                    <g transform="rotate(68.98962055051975)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.7515683884609885s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.7515683884609885s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.7515683884609885s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2439.309901123465 951.8744908275467)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3598.61980224693 1235.2489816550933"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.0598729904504318s"
                    />
                    <g transform="rotate(13.73569123924525)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0598729904504318s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0598729904504318s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0598729904504318s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1703.804470313334 37.70564721048868)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2127.608940626668 -593.0887055790226"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.0632121262742222s"
                    />
                    <g transform="rotate(123.89551036665291)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.0632121262742222s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.0632121262742222s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.0632121262742222s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2499.897362834949 870.9413828631567)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3719.794725669898 1073.3827657263134"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.32559375242563426s"
                    />
                    <g transform="rotate(9.422338661842312)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.32559375242563426s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.32559375242563426s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.32559375242563426s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1544.1709978145946 1322.6079711376838)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1808.3419956291891 1976.7159422753675"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.857719633489449s"
                    />
                    <g transform="rotate(68.00796564165846)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.857719633489449s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.857719633489449s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.857719633489449s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2559.5172394576325 650.1415354701235)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3839.034478915265 631.7830709402471"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.0257453352875323s"
                    />
                    <g transform="rotate(179.1779787468514)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0257453352875323s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0257453352875323s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0257453352875323s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1702.1894184719486 1299.5896892928745)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2124.378836943897 1930.6793785857492"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.3725162613499202s"
                    />
                    <g transform="rotate(56.218078476545024)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.3725162613499202s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.3725162613499202s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.3725162613499202s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(499.69737385974486 138.57978921555843)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-280.6052522805103 -391.34042156888313"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.5459479627372117s"
                    />
                    <g transform="rotate(34.18126509658888)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.5459479627372117s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.5459479627372117s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.5459479627372117s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2552.4625044958016 740.9410373132664)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3824.925008991603 813.3820746265328"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.5834309208888643s"
                    />
                    <g transform="rotate(3.2583202953357264)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.5834309208888643s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.5834309208888643s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.5834309208888643s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(0.458617212227864 686.3935987667503)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1279.0827655755443 704.2871975335007"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.8926035822907107s"
                    />
                    <g transform="rotate(179.19880601044886)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8926035822907107s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8926035822907107s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8926035822907107s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(652.5926182387846 85.81444759197325)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;25.185236477569106 -496.8711048160535"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.6445484985231793s"
                    />
                    <g transform="rotate(42.88346303401942)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.6445484985231793s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.6445484985231793s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.6445484985231793s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1864.6560263334445 1263.1900251463198)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2449.312052666889 1857.88005029264"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.3593862271927528s"
                    />
                    <g transform="rotate(45.48746668667511)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.3593862271927528s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.3593862271927528s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.3593862271927528s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1195.0924567686698 1.4723889943397808)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1110.1849135373398 -665.5552220113204"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.2698476164991317s"
                    />
                    <g transform="rotate(82.74569638225162)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.2698476164991317s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.2698476164991317s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.2698476164991317s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1626.4397826595123 1312.048977272777)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1972.8795653190248 1955.597954545554"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.7898415300732586s"
                    />
                    <g transform="rotate(61.70522094086597)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7898415300732586s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7898415300732586s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7898415300732586s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(385.7228386322877 1146.784791136915)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-508.55432273542465 1625.0695822738298"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.5872684981229169s"
                    />
                    <g transform="rotate(151.86086497766163)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.5872684981229169s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.5872684981229169s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.5872684981229169s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(139.42144038123638 971.900167093138)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1001.1571192375272 1275.300334186276"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.46560523584142804s"
                    />
                    <g transform="rotate(165.1039558462822)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.46560523584142804s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.46560523584142804s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.46560523584142804s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(621.2079461228593 1241.6595838315316)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-37.584107754281376 1814.8191676630634"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.7699947001517005s"
                    />
                    <g transform="rotate(138.97621135336783)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7699947001517005s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7699947001517005s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.7699947001517005s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2156.594906505202 1155.6317292934957)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3033.189813010404 1642.7634585869914"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.190448863182521s"
                    />
                    <g transform="rotate(29.061324378535062)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.190448863182521s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.190448863182521s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.190448863182521s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1789.7424710968837 1281.70359179942)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2299.4849421937674 1894.9071835988402"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.1302013336214918s"
                    />
                    <g transform="rotate(50.26400821940153)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.1302013336214918s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.1302013336214918s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.1302013336214918s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1609.6232257470588 22.546190109523195)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1939.2464514941175 -623.4076197809536"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.024191523333573748s"
                    />
                    <g transform="rotate(117.03472784405518)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.024191523333573748s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.024191523333573748s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.024191523333573748s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(789.8433149593911 1286.0438060218403)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;299.68662991878216 1903.5876120436808"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.5647646653049456s"
                    />
                    <g transform="rotate(128.43972373150447)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.5647646653049456s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.5647646653049456s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.5647646653049456s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(414.8142921428217 1161.1639051658915)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-450.37141571435654 1653.827810331783"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.461440741020763s"
                    />
                    <g transform="rotate(150.34145533453463)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.461440741020763s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.461440741020763s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.461440741020763s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1614.760498153052 23.26720702259081)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1949.5209963061038 -621.9655859548184"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.4906638178819067s"
                    />
                    <g transform="rotate(117.42124464463527)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.4906638178819067s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.4906638178819067s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.4906638178819067s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(20.74546826812866 788.3688064854063)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1238.5090634637427 908.2376129708125"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.9364946350221242s"
                    />
                    <g transform="rotate(174.56238228965887)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9364946350221242s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9364946350221242s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9364946350221242s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1559.8357982417672 1320.8287755705446)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1839.6715964835344 1973.1575511410895"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.2274492813047986s"
                    />
                    <g transform="rotate(66.78165031887923)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.2274492813047986s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.2274492813047986s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.2274492813047986s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(609.7411374368676 1238.0217577369517)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-60.51772512626485 1807.5435154739037"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.154720856914942s"
                    />
                    <g transform="rotate(139.6453047425235)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.154720856914942s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.154720856914942s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.154720856914942s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2335.6687736471767 290.45636143434047)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3391.3375472943535 -87.58727713131907"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.4528484897624714s"
                    />
                    <g transform="rotate(160.2971379491683)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.4528484897624714s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.4528484897624714s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.4528484897624714s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1079.8498322398264 1328.776763592727)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;879.6996644796525 1989.053527185454"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.686531644434373s"
                    />
                    <g transform="rotate(106.86366796065283)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.686531644434373s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.686531644434373s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.686531644434373s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(484.7128369617333 1192.3088148083393)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-310.57432607653345 1716.1176296166789"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.8501342144064603s"
                    />
                    <g transform="rotate(146.62945718758507)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.8501342144064603s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.8501342144064603s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.8501342144064603s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(23.243752947289295 795.3188867776621)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1233.5124941054214 922.1377735553243"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.995164671442455s"
                    />
                    <g transform="rotate(174.23780602267072)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.995164671442455s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.995164671442455s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.995164671442455s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(14.555824311434435 567.9709373989308)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1250.8883513771311 467.4418747978615"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.0803056091236916s"
                    />
                    <g transform="rotate(4.542136212719714)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.0803056091236916s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.0803056091236916s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.0803056091236916s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2559.984063841422 665.164185484134)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3839.968127682844 661.828370968268"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.3810324656589956s"
                    />
                    <g transform="rotate(179.85067965634008)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.3810324656589956s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.3810324656589956s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.3810324656589956s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(196.86470766226967 1024.7211227958871)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-886.2705846754607 1380.9422455917743"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.8236004327693306s"
                    />
                    <g transform="rotate(161.79501831211712)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8236004327693306s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8236004327693306s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.8236004327693306s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1727.7888202487811 42.24162814627243)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2175.5776404975622 -584.0167437074551"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.11587233134854281s"
                    />
                    <g transform="rotate(125.56562064709968)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.11587233134854281s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.11587233134854281s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.11587233134854281s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(208.98538802409826 302.4191028736587)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-862.0292239518035 -63.661794252682625"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.39601139097616606s"
                    />
                    <g transform="rotate(18.870816264305034)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.39601139097616606s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.39601139097616606s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.39601139097616606s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(504.6261809734416 136.6101026302831)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-270.7476380531168 -395.2797947394338"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.0485076916455363s"
                    />
                    <g transform="rotate(34.449291251490244)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.0485076916455363s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.0485076916455363s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.0485076916455363s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2276.0756772494415 1088.342200994337)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3272.151354498883 1508.1844019886737"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.03634504322647442s"
                    />
                    <g transform="rotate(22.855242515895252)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.03634504322647442s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.03634504322647442s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.03634504322647442s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2425.1281244104784 369.8108241428303)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3570.2562488209574 71.12164828566063"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.8318240127846237s"
                    />
                    <g transform="rotate(165.3809952002725)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.8318240127846237s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.8318240127846237s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.8318240127846237s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1647.217656156683 1308.8988623514213)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2014.435312313366 1949.2977247028425"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.072410364801683s"
                    />
                    <g transform="rotate(60.16916884369886)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.072410364801683s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.072410364801683s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.072410364801683s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2271.1709853467546 1091.4964932244357)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3262.341970693509 1514.4929864488715"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.0753193366305678s"
                    />
                    <g transform="rotate(23.111064113902348)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0753193366305678s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0753193366305678s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.0753193366305678s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1548.0155161013854 1322.1812433457749)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1816.0310322027706 1975.8624866915495"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.0429522938647007s"
                    />
                    <g transform="rotate(67.70590513629878)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.0429522938647007s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.0429522938647007s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.0429522938647007s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(47.63557630995001 849.1751697127258)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1184.7288473801 1029.8503394254517"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.3940360340282143s"
                    />
                    <g transform="rotate(171.65936777655355)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.3940360340282143s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.3940360340282143s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.3940360340282143s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2241.983348618766 227.50611901119794)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3203.9666972375317 -213.48776197760412"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.1320075066618915s"
                    />
                    <g transform="rotate(155.37225919261402)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.1320075066618915s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.1320075066618915s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.1320075066618915s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(162.0573583309449 342.9293737531266)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-955.8852833381102 17.358747506253167"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.9687835890149937s"
                    />
                    <g transform="rotate(16.236775404382083)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9687835890149937s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9687835890149937s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.9687835890149937s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2441.0470895036015 949.9278396961213)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3602.094179007203 1231.3556793922426"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.689932781070297s"
                    />
                    <g transform="rotate(13.625218039917032)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.689932781070297s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.689932781070297s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.689932781070297s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(216.10320430777574 1040.198910276194)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-847.7935913844485 1411.897820552388"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.710973731831973s"
                    />
                    <g transform="rotate(160.74186344774597)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.710973731831973s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.710973731831973s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.710973731831973s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2505.3223463062286 861.7983660800409)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3730.6446926124568 1055.0967321600817"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.5757942474401175s"
                    />
                    <g transform="rotate(8.964707160466984)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#38737f">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.5757942474401175s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.5757942474401175s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.5757942474401175s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1919.9368232064146 89.54296911255358)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2559.873646412829 -489.41406177489284"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.4493748978520222s"
                    />
                    <g transform="rotate(137.86405101484098)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.4493748978520222s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.4493748978520222s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.4493748978520222s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1834.1951070173754 1271.0930980416854)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2388.390214034751 1873.6861960833708"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.23095334984393773s"
                    />
                    <g transform="rotate(47.39575776987981)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.23095334984393773s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.23095334984393773s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.23095334984393773s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(404.66652339269694 1156.250045175074)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-470.6669532146061 1644.0000903501482"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.32393881356904436s"
                    />
                    <g transform="rotate(150.87273721285405)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.32393881356904436s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.32393881356904436s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.32393881356904436s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(1346.8504332215866 1336.0876607002751)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;1413.7008664431733 2003.6753214005505"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.32090882510537494s"
                    />
                    <g transform="rotate(84.28161752023479)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.32090882510537494s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.32090882510537494s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.32090882510537494s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2520.7363030669494 504.1950133736523)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3761.472606133899 339.8900267473046"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.012612875573435s"
                    />
                    <g transform="rotate(172.45647544940388)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.012612875573435s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.012612875573435s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.012612875573435s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(66.31036937632712 880.8749869557662)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-1147.3792612473458 1093.2499739115324"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-0.29273417551723924s"
                    />
                    <g transform="rotate(170.07470258958313)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.29273417551723924s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.29273417551723924s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-0.29273417551723924s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(824.5782471814107 1293.2552254142665)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;369.1564943628214 1918.010450828533"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.4898871863665488s"
                    />
                    <g transform="rotate(126.09056341754317)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4898871863665488s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4898871863665488s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.4898871863665488s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2479.0491000292222 902.4617423073445)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3678.098200058445 1136.423484614689"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.310416364562896s"
                    />
                    <g transform="rotate(11.040983556157018)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.310416364562896s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.310416364562896s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.310416364562896s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2287.9350572558697 256.45032083141905)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;3295.870114511739 -155.5993583371619"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-3.175560683994028s"
                    />
                    <g transform="rotate(157.7649722674586)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#084f5a">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.175560683994028s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.175560683994028s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-3.175560683994028s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(282.25931071176933 1087.2624387000274)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;-715.4813785764613 1506.0248774000547"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-2.268895033671133s"
                    />
                    <g transform="rotate(157.23168610456295)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#88c3cf">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.268895033671133s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.268895033671133s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-2.268895033671133s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
                <g transform="translate(2114.7287277889945 1175.2935893838617)">
                    <animateTransform
                        attributeName="transform"
                        type="translate"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="1 0 1 0"
                        values="1280 668.5;2949.457455577989 1682.0871787677231"
                        keyTimes="0;1"
                        dur="3.7037037037037033s"
                        begin="-1.6549564370162568s"
                    />
                    <g transform="rotate(31.26343101116022)">
                        <ellipse cx={0} cy={0} rx={0} ry={0} fill="#6099a5">
                            <animate
                                attributeName="opacity"
                                values="0;0;1"
                                keyTimes="0;0.5;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.6549564370162568s"
                                calcMode="spline"
                                keySplines="1 0 1 0;0.5 0 0.5 1"
                            />
                            <animate
                                attributeName="ry"
                                values="0;12"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.6549564370162568s"
                                calcMode="spline"
                                keySplines="1 0 1 0"
                            />
                            <animate
                                attributeName="rx"
                                values="0;50"
                                keyTimes="0;1"
                                repeatCount="indefinite"
                                dur="3.7037037037037033s"
                                begin="-1.6549564370162568s"
                                calcMode="spline"
                                keySplines="0.95 0 0.95 0.05"
                            />
                        </ellipse>
                    </g>
                </g>
            </g>
        </svg>
    );
};
