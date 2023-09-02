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
