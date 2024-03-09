interface MoneyIconProps {
    className?: string;
}

const MoneyIcon: React.FC<MoneyIconProps> = ({ className }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 text-light ${className}`}>
            <path d="M22.5 8.08752V7.49999C22.4995 7.19013 22.4031 6.88803 22.224 6.63514C22.045 6.38224 21.7921 6.19095 21.5 6.0875V5.49997C21.4996 5.10228 21.3414 4.721 21.0602 4.43979C20.779 4.15858 20.3977 4.0004 20 3.99997H3.99997C3.60228 4.0004 3.221 4.15858 2.93979 4.43979C2.65858 4.721 2.5004 5.10228 2.49997 5.49997V6.0875C2.20789 6.19095 1.95498 6.38224 1.77595 6.63514C1.59691 6.88803 1.50051 7.19013 1.49998 7.49999V8.08752C1.20791 8.19097 0.955 8.38226 0.775962 8.63515C0.596923 8.88805 0.500527 9.19015 0.5 9.5V18.5C0.500434 18.8977 0.658609 19.279 0.939819 19.5602C1.22103 19.8414 1.60231 19.9996 2 20H22C22.3977 19.9996 22.7789 19.8414 23.0601 19.5602C23.3414 19.279 23.4995 18.8977 23.5 18.5V9.5C23.4994 9.19015 23.403 8.88805 23.224 8.63515C23.045 8.38226 22.7921 8.19097 22.5 8.08752ZM3.99997 5H20C20.1326 5.00015 20.2597 5.05288 20.3534 5.14662C20.4471 5.24036 20.4999 5.36745 20.5 5.50002V5.99999H3.5V5.49997C3.50016 5.36742 3.55289 5.24034 3.64662 5.14662C3.74034 5.05289 3.86742 5.00016 3.99997 5ZM2.99998 6.99997H21C21.1325 7.00012 21.2596 7.05285 21.3534 7.14659C21.4471 7.24032 21.4998 7.36742 21.5 7.49999V8H2.49997V7.49999C2.50012 7.36742 2.55285 7.24032 2.64658 7.14659C2.74032 7.05285 2.86742 7.00012 2.99998 6.99997ZM22.5 18.5C22.4998 18.6326 22.4471 18.7596 22.3533 18.8534C22.2596 18.9471 22.1325 18.9998 22 19H2C1.86744 18.9998 1.74036 18.9471 1.64663 18.8534C1.55289 18.7596 1.50016 18.6326 1.49998 18.5V9.5C1.50013 9.36743 1.55286 9.24034 1.6466 9.1466C1.74034 9.05286 1.86743 9.00013 2 8.99999H22C22.1325 9.00013 22.2596 9.05286 22.3534 9.1466C22.4471 9.24034 22.4998 9.36743 22.5 9.5V18.5Z" fill="white" />
            <path d="M12.3531 13.5903C12.2977 13.5691 12.2462 13.5498 12.2018 13.5301C12.1502 13.5074 12.088 13.4834 12.0194 13.4573C11.6903 13.3326 11.4999 13.2346 11.4999 13.1053C11.4999 13.0684 11.5595 12.9693 11.703 12.8965C11.8099 12.8428 12.1979 12.695 12.7037 13.0669C12.8106 13.1445 12.9438 13.1766 13.0743 13.1562C13.2048 13.1359 13.3219 13.0648 13.4001 12.9584C13.4784 12.852 13.5113 12.719 13.4918 12.5884C13.4723 12.4578 13.4019 12.3402 13.296 12.2613C13.0579 12.0837 12.7875 11.9541 12.4999 11.8799V11.5002C12.4986 11.3684 12.4454 11.2425 12.3517 11.1497C12.2581 11.057 12.1316 11.005 11.9999 11.005C11.8681 11.005 11.7417 11.057 11.648 11.1497C11.5544 11.2425 11.5012 11.3684 11.4999 11.5002V11.9029C11.4145 11.9302 11.3315 11.9642 11.2514 12.0045C10.7878 12.2391 10.4998 12.6607 10.4998 13.1054C10.4998 13.9501 11.2864 14.2492 11.6643 14.3925C11.7144 14.4113 11.76 14.4284 11.7981 14.4452C11.8565 14.4709 11.9238 14.4968 11.9961 14.5246C12.3821 14.6721 12.4998 14.7529 12.4998 14.8701C12.4998 14.9069 12.4402 15.006 12.2964 15.0786C12.1895 15.133 11.8015 15.2801 11.2959 14.9084C11.189 14.8299 11.0554 14.797 10.9243 14.817C10.7932 14.837 10.6754 14.9083 10.5969 15.0151C10.5184 15.122 10.4855 15.2556 10.5055 15.3867C10.5255 15.5178 10.5968 15.6356 10.7036 15.7141C10.942 15.8901 11.2124 16.0179 11.4997 16.0903V16.5C11.501 16.6318 11.5543 16.7577 11.6479 16.8504C11.7415 16.9432 11.868 16.9952 11.9997 16.9952C12.1315 16.9952 12.258 16.9432 12.3516 16.8504C12.4452 16.7577 12.4984 16.6318 12.4997 16.5V16.0701C12.5849 16.0435 12.6678 16.0103 12.7478 15.9707C13.2118 15.7359 13.4999 15.3141 13.4999 14.8699C13.4999 14.0283 12.7252 13.7324 12.3531 13.5903Z" fill="white" />
            <path d="M12 9.50003C11.11 9.50003 10.24 9.76395 9.49994 10.2584C8.75991 10.7529 8.18314 11.4557 7.84254 12.278C7.50195 13.1002 7.41283 14.005 7.58647 14.8779C7.7601 15.7509 8.18869 16.5527 8.81802 17.182C9.44736 17.8113 10.2492 18.2399 11.1221 18.4136C11.995 18.5872 12.8998 18.4981 13.7221 18.1575C14.5443 17.8169 15.2471 17.2401 15.7416 16.5001C16.2361 15.7601 16.5 14.89 16.5 14C16.4986 12.807 16.0241 11.6632 15.1805 10.8196C14.3369 9.97594 13.1931 9.5014 12 9.50003ZM12 17.5C11.3078 17.5 10.6311 17.2948 10.0555 16.9102C9.47992 16.5256 9.03132 15.979 8.76641 15.3394C8.5015 14.6999 8.43219 13.9961 8.56724 13.3172C8.70229 12.6383 9.03563 12.0146 9.52512 11.5251C10.0146 11.0357 10.6382 10.7023 11.3172 10.5673C11.9961 10.4322 12.6999 10.5015 13.3394 10.7664C13.9789 11.0313 14.5256 11.48 14.9102 12.0555C15.2947 12.6311 15.5 13.3078 15.5 14C15.499 14.928 15.1299 15.8176 14.4737 16.4737C13.8176 17.1299 12.9279 17.499 12 17.5V17.5Z" fill="white" />
            <path d="M7 17H4.9368C4.84677 16.6544 4.66617 16.339 4.41361 16.0864C4.16104 15.8339 3.84568 15.6533 3.50003 15.5633V12.4367C3.84566 12.3466 4.16102 12.166 4.41358 11.9135C4.66614 11.6609 4.84675 11.3456 4.9368 10.9999H7.00005C7.13181 10.9986 7.25775 10.9454 7.35048 10.8518C7.4432 10.7582 7.49522 10.6317 7.49522 10.4999C7.49522 10.3682 7.4432 10.2417 7.35048 10.1481C7.25775 10.0545 7.13181 10.0012 7.00005 9.99994H4.50002C4.43435 9.99994 4.36932 10.0129 4.30866 10.038C4.24799 10.0631 4.19287 10.1 4.14643 10.1464C4.1 10.1928 4.06317 10.248 4.03805 10.3086C4.01292 10.3693 3.99999 10.4343 4 10.5C3.99971 10.7651 3.89427 11.0193 3.7068 11.2068C3.51932 11.3943 3.26514 11.4997 3.00002 11.5C2.8674 11.5 2.74022 11.5527 2.64645 11.6464C2.55268 11.7402 2.5 11.8674 2.5 12V16C2.5 16.0656 2.51293 16.1307 2.53806 16.1913C2.56319 16.252 2.60002 16.3071 2.64645 16.3535C2.69288 16.4 2.748 16.4368 2.80867 16.4619C2.86933 16.4871 2.93435 16.5 3.00002 16.5C3.26515 16.5003 3.51935 16.6057 3.70682 16.7932C3.8943 16.9807 3.99974 17.2349 4 17.5C4 17.6326 4.05268 17.7598 4.14645 17.8535C4.24022 17.9473 4.3674 18 4.50002 18H7C7.06607 18.0006 7.13161 17.9882 7.19283 17.9633C7.25405 17.9385 7.30975 17.9018 7.35669 17.8553C7.40363 17.8088 7.4409 17.7535 7.46633 17.6925C7.49176 17.6315 7.50486 17.5661 7.50486 17.5C7.50486 17.4339 7.49176 17.3685 7.46633 17.3075C7.4409 17.2466 7.40363 17.1912 7.35669 17.1447C7.30975 17.0982 7.25405 17.0615 7.19283 17.0367C7.13161 17.0118 7.06607 16.9994 7 17Z" fill="white" />
            <path d="M21 11.5C20.7348 11.4997 20.4806 11.3943 20.2932 11.2068C20.1057 11.0193 20.0003 10.7651 20 10.5C20 10.3674 19.9473 10.2402 19.8535 10.1464C19.7598 10.0527 19.6326 9.99999 19.5 9.99999H17C16.9339 9.99935 16.8684 10.0118 16.8071 10.0367C16.7459 10.0615 16.6902 10.0982 16.6433 10.1447C16.5963 10.1912 16.5591 10.2465 16.5336 10.3075C16.5082 10.3685 16.4951 10.4339 16.4951 10.5C16.4951 10.5661 16.5082 10.6315 16.5336 10.6925C16.5591 10.7534 16.5963 10.8088 16.6433 10.8553C16.6902 10.9017 16.7459 10.9385 16.8071 10.9633C16.8684 10.9882 16.9339 11.0006 17 11H19.0632C19.1533 11.3456 19.3339 11.661 19.5864 11.9135C19.839 12.1661 20.1544 12.3467 20.5 12.4367V15.5633C20.1543 15.6533 19.839 15.8339 19.5864 16.0865C19.3339 16.3391 19.1532 16.6544 19.0632 17.0001H17C16.9339 16.9994 16.8684 17.0119 16.8071 17.0367C16.7459 17.0616 16.6902 17.0983 16.6433 17.1448C16.5963 17.1913 16.5591 17.2466 16.5336 17.3076C16.5082 17.3686 16.4951 17.434 16.4951 17.5001C16.4951 17.5661 16.5082 17.6315 16.5336 17.6925C16.5591 17.7535 16.5963 17.8088 16.6433 17.8553C16.6902 17.9018 16.7459 17.9386 16.8071 17.9634C16.8684 17.9882 16.9339 18.0007 17 18.0001H19.5C19.6326 18.0001 19.7598 17.9474 19.8535 17.8536C19.9473 17.7598 20 17.6327 20 17.5C20.0002 17.2349 20.1057 16.9807 20.2931 16.7932C20.4806 16.6057 20.7348 16.5003 21 16.5C21.1326 16.5 21.2598 16.4473 21.3535 16.3536C21.4473 16.2598 21.5 16.1326 21.5 16V12C21.5 11.8674 21.4473 11.7402 21.3535 11.6464C21.2598 11.5527 21.1326 11.5 21 11.5Z" fill="white" />
        </svg>
    );
}

export default MoneyIcon;
