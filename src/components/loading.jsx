import React from 'react'

const Loading = () => {
  return (
    <div>
      {/* From Uiverse.io by mobinkakei */}
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
      <style jsx>{`
        .wrapper {
          @apply w-52 h-15 relative z-10;
        }

        .circle {
          @apply w-5 h-5 absolute rounded-full bg-white left-[15%];
          transform-origin: 50%;
          animation: circle7124 .5s alternate infinite ease;
        }

        @keyframes circle7124 {
          0% {
            @apply top-15 h-1.25 rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[25px] rounded-br-[25px];
            transform: scaleX(1.7);
          }

          40% {
            @apply h-5 rounded-full;
            transform: scaleX(1);
          }

          100% {
            top: 0%;
          }
        }

        .circle:nth-child(2) {
          @apply left-[45%];
          animation-delay: .2s;
        }

        .circle:nth-child(3) {
          @apply right-[15%];
          left: auto;
          animation-delay: .3s;
        }

        .shadow {
          @apply w-5 h-1 rounded-full bg-black bg-opacity-90 absolute top-[62px];
          transform-origin: 50%;
          z-index: -1;
          left: 15%;
          filter: blur(1px);
          animation: shadow046 .5s alternate infinite ease;
        }

        @keyframes shadow046 {
          0% {
            transform: scaleX(1.5);
          }

          40% {
            transform: scaleX(1);
            opacity: .7;
          }

          100% {
            transform: scaleX(.2);
            opacity: .4;
          }
        }

        .shadow:nth-child(4) {
          @apply left-[45%];
          animation-delay: .2s;
        }

        .shadow:nth-child(5) {
          @apply right-[15%];
          left: auto;
          animation-delay: .3s;
        }
      `}</style>
    </div>
  )
}

export default Loading
