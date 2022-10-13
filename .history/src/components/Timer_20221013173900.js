import React from "react";
import useCountdown from "../hooks/useCountdown";

const Timer = () => {
  const [second, minute, hour, day] = useCountdown();
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold"></h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Timer;
