import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="main">
        <div className="up">
          <div className="loaders">
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
            <div className="loader" />
          </div>
          <div className="loadersB">
            <div className="loaderA">
              <div className="ball0" />
            </div>
            <div className="loaderA">
              <div className="ball1" />
            </div>
            <div className="loaderA">
              <div className="ball2" />
            </div>
            <div className="loaderA">
              <div className="ball3" />
            </div>
            <div className="loaderA">
              <div className="ball4" />
            </div>
            <div className="loaderA">
              <div className="ball5" />
            </div>
            <div className="loaderA">
              <div className="ball6" />
            </div>
            <div className="loaderA">
              <div className="ball7" />
            </div>
            <div className="loaderA">
              <div className="ball8" />
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  .loaders,
  .loadersB {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Dynamically scale sizes */
  .loader {
    position: absolute;
    width: clamp(0.8rem, 1vw + 0.6rem, 1.2rem);
    height: clamp(8rem, 20vw, 13rem);
    border-radius: 50px;
    background: #e0e0e0;
  }

  .loader:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: clamp(0.8rem, 1vw + 0.6rem, 1.2rem);
    height: 40%;
    background: #e0e0e0;
    border-radius: 50px;
    border: 1px solid #e2e2e2;
    box-shadow:
      inset 5px 5px 15px #d3d2d2ab,
      inset -5px -5px 15px #e9e9e9ab;
    mask-image: linear-gradient(
      to bottom,
      black calc(100% - 48px),
      transparent 100%
    );
  }

  .loader::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: clamp(0.8rem, 1vw + 0.6rem, 1.2rem);
    height: 35%;
    background: #e0e0e0;
    border-radius: 50px;
    border: 1px solid #e2e2e2;
    box-shadow:
      inset 5px 5px 15px #d3d2d2ab,
      inset -5px -5px 15px #e9e9e9ab;
    mask-image: linear-gradient(
      to top,
      black calc(100% - 48px),
      transparent 100%
    );
  }

  .loaderA {
    position: absolute;
    width: clamp(0.8rem, 1vw + 0.6rem, 1.2rem);
    height: clamp(8rem, 20vw, 13rem);
    border-radius: 50px;
    background: transparent;
  }

  /* Ball styles */
  .ball0,
  .ball1,
  .ball2,
  .ball3,
  .ball4,
  .ball5,
  .ball6,
  .ball7,
  .ball8,
  .ball9 {
    width: clamp(0.8rem, 1vw + 0.6rem, 1.2rem);
    height: clamp(0.8rem, 1vw + 0.6rem, 1.2rem);
    border-radius: 50%;
    background-color: #1341f3;
    box-shadow:
      rgba(0, 0, 0, 0.17) 0px -10px 10px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -15px 15px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -40px 20px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px,
      rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px,
      rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px,
      0px -1px 15px -8px rgba(0, 0, 0, 0.09);
    animation: move 3.63s ease-in-out infinite;
  }

  /* Rotation for loader and balls */
  ${Array.from({ length: 9 }, (_, i) => `
    .loader:nth-child(${i + 2}) { transform: rotate(${i * 20}deg); }
    .loaderA:nth-child(${i + 2}) { transform: rotate(${i * 20}deg); }
    .ball${i} { animation-delay: ${i * 0.2}s; }
  `).join("")}

  @keyframes move {
    0% { transform: translateY(0); }
    50% { transform: translateY(90%); }
    100% { transform: translateY(0); }
  }

  /* Mobile adjustments */
  @media (max-width: 768px) {
    .loader, .loaderA {
      height: clamp(6rem, 18vw, 10rem);
    }
    .main {
      transform: scale(0.8);
    }
  }

  /* Extra small devices */
  @media (max-width: 480px) {
    .main {
      transform: scale(0.6);
    }
  }
`;


export default Loader;
