import React from 'react';
import Lottie from 'lottie-react';

const MemoLottie = React.memo(({ animationData, className, loop = true }) => (
  <Lottie animationData={animationData} className={className} loop={loop} />
));

export default MemoLottie;