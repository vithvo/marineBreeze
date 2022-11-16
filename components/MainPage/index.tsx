import React, { createRef, RefObject, useEffect } from "react";
import styles from "./Main.module.scss";

export const MainPage = () => {
  const contentRef: RefObject<HTMLDivElement> = createRef();
  const logoRef: RefObject<HTMLDivElement> = createRef();
  const logoImgRef: RefObject<HTMLImageElement> = createRef();
  const mainRef: RefObject<HTMLDivElement> = createRef();
  const infoRef: RefObject<HTMLDivElement> = createRef();
  const videoRef: RefObject<HTMLVideoElement> = createRef();

  useEffect(() => {
    const height = contentRef.current?.getBoundingClientRect().height;
    window.scrollTo(0, 0);
    window.addEventListener("scroll", () => {
      // console.log(Math.floor(window.scrollY / 2), mainRef.current.offsetHeight);
      if (
        logoRef.current &&
        logoImgRef.current &&
        mainRef.current &&
        infoRef.current &&
        videoRef.current &&
        contentRef.current
      ) {
        if (window.scrollY / 8 > mainRef.current.offsetHeight / 6) {
          logoRef.current.style.opacity = `${
            (1 - window.scrollY / 2 / mainRef.current?.offsetHeight) * 5
          }`;
          // logoImgRef.current.setAttribute("src", "img/logo_marin_sea.png");
        } else {
          logoRef.current.style.opacity = "1";
          logoImgRef.current.setAttribute("src", "img/logo_marin.png");
        }
        logoImgRef.current.style.scale = `${1 - (window.scrollY / (height as number)) * 0.88888}`;
        if (window.scrollY > 0.1) {
          logoImgRef.current.style.animation = "none";
        }

        if (Math.ceil(window.scrollY / 2) >= mainRef.current.offsetHeight) {
          infoRef.current.classList.add(`${styles.anim}`);
          infoRef.current.firstElementChild?.classList.add(`${styles.anim}`);
          infoRef.current.style.opacity = "1";
					logoRef.current.style.display = "none";

          setTimeout(() => {
            if (
              logoRef.current &&
              logoImgRef.current &&
              mainRef.current &&
              infoRef.current &&
              videoRef.current &&
              contentRef.current
            ) {
              mainRef.current.style.position = "relative";
              videoRef.current.style.position = "relative";
              infoRef.current.style.position = "absolute";
              contentRef.current.style.display = "none";
              window.scrollTo(0, 0);
            }
          }, 1000);

        
        }
      }
    });
  }, []);

  return (
    <div ref={mainRef} className={styles.main}>
      <div ref={logoRef} className={styles.logo}>
        <img ref={logoImgRef} src="img/logo_marin.png" alt="logo_marin" />
      </div>
      <video ref={videoRef} autoPlay muted loop preload="auto" className={styles.video}>
        <source type="video/mp4" src="video/volny.mp4" />
      </video>
      <div ref={contentRef} className={styles.content}></div>
      <div ref={infoRef} className={styles.info}>
        <div>
          <p>КАКАЯ ХОРОШАЯ КОМПАНИЯ</p>
          <p>КАКИЕ ХОРОШИЕ ДЕЛА</p>
        </div>
      </div>
    </div>
  );
};
