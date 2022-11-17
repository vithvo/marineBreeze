import React, { createRef, RefObject, useEffect, useState } from "react";
import styles from "./Main.module.scss";

export const MainPage = () => {
  const contentRef: RefObject<HTMLDivElement> = createRef();
  const logoRef: RefObject<HTMLDivElement> = createRef();
  const logoImgRef: RefObject<HTMLImageElement> = createRef();
  const mainRef: RefObject<HTMLDivElement> = createRef();
  const infoRef: RefObject<HTMLDivElement> = createRef();
  const videoRef: RefObject<HTMLVideoElement> = createRef();
  const videoRef1: RefObject<HTMLVideoElement> = createRef();
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    const height = contentRef.current?.getBoundingClientRect().height;
    window.scrollTo(0, 0);
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY, mainRef.current?.offsetHeight / 2);
      if (
        logoRef.current &&
        logoImgRef.current &&
        mainRef.current &&
        infoRef.current &&
        videoRef.current &&
        videoRef1.current &&
        contentRef.current
      ) {
        if (window.scrollY > mainRef.current.offsetHeight / 1.3) {
          logoRef.current.style.opacity = "0.9";
          videoRef1.current.style.opacity = `${
            1.5 - window.scrollY / mainRef.current?.offsetHeight
          }`;
          videoRef1.current.style.opacity = "0.9";
          videoRef1.current.style.zIndex = "4";
        } else {
          logoRef.current.style.opacity = "1";
          // logoImgRef.current.setAttribute("src", "img/logo_marin.png");
          videoRef1.current.style.opacity = "0";
        }
        logoImgRef.current.style.scale = `${1 - (window.scrollY / (height as number)) * 1.5}`;
        if (window.scrollY > 0.1) {
          logoImgRef.current.style.animation = "none";
        }

        if (Math.ceil(window.scrollY) >= mainRef.current.offsetHeight) {
          infoRef.current.classList.add(`${styles.anim}`);
          infoRef.current.firstElementChild?.classList.add(`${styles.anim}`);
          infoRef.current.style.opacity = "1";
          logoRef.current.style.display = "none";
          if (videoRef1.current) {
            videoRef1.current.style.opacity = "0";
            videoRef1.current.style.display = "none";
          }

          setTimeout(() => {
            if (
              logoRef.current &&
              logoImgRef.current &&
              mainRef.current &&
              infoRef.current &&
              videoRef.current &&
              videoRef1.current &&
              contentRef.current
            ) {
              mainRef.current.style.position = "relative";
              videoRef.current.style.position = "relative";
              infoRef.current.style.position = "absolute";
              contentRef.current.style.display = "none";
              scroll && window.scrollTo(0, 0);
              setScroll(false);
            }
          }, 1500);
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
      <video ref={videoRef1} className={styles.video1} autoPlay muted loop preload="auto">
        <source type="video/mp4" src="video/volny.mp4" />
        <div className={styles.videoSrc}></div>
      </video>
      <div ref={contentRef} className={styles.content}></div>
      <div ref={infoRef} className={styles.info}>
        <div>
          <p>КАКАЯ ХОРОШАЯ КОМПАНИЯ</p>
          <p>КАКИЕ ХОРОШИЕ ДЕЛА</p>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolore quia inventore quam
        illum ut debitis vitae deserunt quas, provident suscipit consectetur ex nihil quaerat
        expedita autem doloribus itaque pariatur. Ducimus eius quaerat sit cumque necessitatibus
        natus id laboriosam tenetur, itaque, illum, odio libero? Hic quaerat numquam deleniti
        perferendis, perspiciatis repellendus porro fugiat, ullam sint adipisci nesciunt. Deserunt,
        nam eveniet. Repellat veniam voluptatum quasi explicabo voluptatibus accusantium optio,
        praesentium cumque odio dolor non tempora earum est aliquam delectus sint repellendus
        reiciendis dicta dolores? Dolorum, atque laborum! Rerum illum alias commodi. Amet pariatur
        optio, veniam quis eveniet nisi corrupti voluptatem non, nemo sequi assumenda impedit porro
        aut illum. Saepe pariatur doloremque at sequi provident, commodi, veritatis accusamus
        suscipit animi, facilis modi! Sapiente, rerum earum alias reprehenderit animi accusamus, est
        hic atque nulla esse eaque asperiores commodi minus! Quisquam eum mollitia, blanditiis
        facere alias nemo nihil saepe, dolore labore sequi nesciunt assumenda! Quasi rem reiciendis
        commodi facilis? Culpa facilis harum exercitationem eaque cumque consequatur placeat, vero
        nam perferendis quibusdam voluptas eveniet error veniam magni recusandae explicabo eius
        officia cupiditate numquam vel facere! Quas nobis saepe dolore eligendi odio veritatis
        soluta doloribus incidunt, est, quo repellat sapiente similique aliquid beatae perferendis
        fuga numquam cupiditate molestiae! Eum eveniet optio distinctio modi obcaecati quidem
        reiciendis? Et expedita similique, mollitia soluta hic aliquam dolores aut labore pariatur
        totam repellat, velit cupiditate officia eius voluptatum ratione non esse? Id temporibus
        eligendi quibusdam ullam doloribus est voluptas laborum. Soluta sint porro totam dolore
        quibusdam adipisci quos voluptates facere quidem. Quaerat ratione placeat architecto, qui
        laboriosam corporis odio id alias? Suscipit praesentium dicta ipsam voluptates officia. Qui,
        culpa recusandae. Ducimus quas vitae dolorum voluptatibus, eveniet repellat quo,
        perspiciatis nostrum tempora beatae recusandae a porro non? Quasi quis aliquid quas facilis
        commodi eius! Dolore laborum, voluptatem cum laboriosam labore soluta.Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Neque dolore quia inventore quam illum ut debitis vitae
        deserunt quas, provident suscipit consectetur ex nihil quaerat expedita autem doloribus
        itaque pariatur. Ducimus eius quaerat sit cumque necessitatibus natus id laboriosam tenetur,
        itaque, illum, odio libero? Hic quaerat numquam deleniti perferendis, perspiciatis
        repellendus porro fugiat, ullam sint adipisci nesciunt. Deserunt, nam eveniet. Repellat
        veniam voluptatum quasi explicabo voluptatibus accusantium optio, praesentium cumque odio
        dolor non tempora earum est aliquam delectus sint repellendus reiciendis dicta dolores?
        Dolorum, atque laborum! Rerum illum alias commodi. Amet pariatur optio, veniam quis eveniet
        nisi corrupti voluptatem non, nemo sequi assumenda impedit porro aut illum. Saepe pariatur
        doloremque at sequi provident, commodi, veritatis accusamus suscipit animi, facilis modi!
        Sapiente, rerum earum alias reprehenderit animi accusamus, est hic atque nulla esse eaque
        asperiores commodi minus! Quisquam eum mollitia, blanditiis facere alias nemo nihil saepe,
        dolore labore sequi nesciunt assumenda! Quasi rem reiciendis commodi facilis? Culpa facilis
        harum exercitationem eaque cumque consequatur placeat, vero nam perferendis quibusdam
        voluptas eveniet error veniam magni recusandae explicabo eius officia cupiditate numquam vel
        facere! Quas nobis saepe dolore eligendi odio veritatis soluta doloribus incidunt, est, quo
        repellat sapiente similique aliquid beatae perferendis fuga numquam cupiditate molestiae!
        Eum eveniet optio distinctio modi obcaecati quidem reiciendis? Et expedita similique,
        mollitia soluta hic aliquam dolores aut labore pariatur totam repellat, velit cupiditate
        officia eius voluptatum ratione non esse? Id temporibus eligendi quibusdam ullam doloribus
        est voluptas laborum. Soluta sint porro totam dolore quibusdam adipisci quos voluptates
        facere quidem. Quaerat ratione placeat architecto, qui laboriosam corporis odio id alias?
        Suscipit praesentium dicta ipsam voluptates officia. Qui, culpa recusandae. Ducimus quas
        vitae dolorum voluptatibus, eveniet repellat quo, perspiciatis nostrum tempora beatae
        recusandae a porro non? Quasi quis aliquid quas facilis commodi eius! Dolore laborum,
        voluptatem cum laboriosam labore soluta. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Neque dolore quia inventore quam illum ut debitis vitae deserunt quas, provident
        suscipit consectetur ex nihil quaerat expedita autem doloribus itaque pariatur. Ducimus eius
        quaerat sit cumque necessitatibus natus id laboriosam tenetur, itaque, illum, odio libero?
        Hic quaerat numquam deleniti perferendis, perspiciatis repellendus porro fugiat, ullam sint
        adipisci nesciunt. Deserunt, nam eveniet. Repellat veniam voluptatum quasi explicabo
        voluptatibus accusantium optio, praesentium cumque odio dolor non tempora earum est aliquam
        delectus sint repellendus reiciendis dicta dolores? Dolorum, atque laborum! Rerum illum
        alias commodi. Amet pariatur optio, veniam quis eveniet nisi corrupti voluptatem non, nemo
        sequi assumenda impedit porro aut illum. Saepe pariatur doloremque at sequi provident,
        commodi, veritatis accusamus suscipit animi, facilis modi! Sapiente, rerum earum alias
        reprehenderit animi accusamus, est hic atque nulla esse eaque asperiores commodi minus!
        Quisquam eum mollitia, blanditiis facere alias nemo nihil saepe, dolore labore sequi
        nesciunt assumenda! Quasi rem reiciendis commodi facilis? Culpa facilis harum exercitationem
        eaque cumque consequatur placeat, vero nam perferendis quibusdam voluptas eveniet error
        veniam magni recusandae explicabo eius officia cupiditate numquam vel facere! Quas nobis
        saepe dolore eligendi odio veritatis soluta doloribus incidunt, est, quo repellat sapiente
        similique aliquid beatae perferendis fuga numquam cupiditate molestiae! Eum eveniet optio
        distinctio modi obcaecati quidem reiciendis? Et expedita similique, mollitia soluta hic
        aliquam dolores aut labore pariatur totam repellat, velit cupiditate officia eius voluptatum
        ratione non esse? Id temporibus eligendi quibusdam ullam doloribus est voluptas laborum.
        Soluta sint porro totam dolore quibusdam adipisci quos voluptates facere quidem. Quaerat
        ratione placeat architecto, qui laboriosam corporis odio id alias? Suscipit praesentium
        dicta ipsam voluptates officia. Qui, culpa recusandae. Ducimus quas vitae dolorum
        voluptatibus, eveniet repellat quo, perspiciatis nostrum tempora beatae recusandae a porro
        non? Quasi quis aliquid quas facilis commodi eius! Dolore laborum, voluptatem cum laboriosam
        labore soluta.Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolore quia
        inventore quam illum ut debitis vitae deserunt quas, provident suscipit consectetur ex nihil
        quaerat expedita autem doloribus itaque pariatur. Ducimus eius quaerat sit cumque
        necessitatibus natus id laboriosam tenetur, itaque, illum, odio libero? Hic quaerat numquam
        deleniti perferendis, perspiciatis repellendus porro fugiat, ullam sint adipisci nesciunt.
        Deserunt, nam eveniet. Repellat veniam voluptatum quasi explicabo voluptatibus accusantium
        optio, praesentium cumque odio dolor non tempora earum est aliquam delectus sint repellendus
        reiciendis dicta dolores? Dolorum, atque laborum! Rerum illum alias commodi. Amet pariatur
        optio, veniam quis eveniet nisi corrupti voluptatem non, nemo sequi assumenda impedit porro
        aut illum. Saepe pariatur doloremque at sequi provident, commodi, veritatis accusamus
        suscipit animi, facilis modi! Sapiente, rerum earum alias reprehenderit animi accusamus, est
        hic atque nulla esse eaque asperiores commodi minus! Quisquam eum mollitia, blanditiis
        facere alias nemo nihil saepe, dolore labore sequi nesciunt assumenda! Quasi rem reiciendis
        commodi facilis? Culpa facilis harum exercitationem eaque cumque consequatur placeat, vero
        nam perferendis quibusdam voluptas eveniet error veniam magni recusandae explicabo eius
        officia cupiditate numquam vel facere! Quas nobis saepe dolore eligendi odio veritatis
        soluta doloribus incidunt, est, quo repellat sapiente similique aliquid beatae perferendis
        fuga numquam cupiditate molestiae! Eum eveniet optio distinctio modi obcaecati quidem
        reiciendis? Et expedita similique, mollitia soluta hic aliquam dolores aut labore pariatur
        totam repellat, velit cupiditate officia eius voluptatum ratione non esse? Id temporibus
        eligendi quibusdam ullam doloribus est voluptas laborum. Soluta sint porro totam dolore
        quibusdam adipisci quos voluptates facere quidem. Quaerat ratione placeat architecto, qui
        laboriosam corporis odio id alias? Suscipit praesentium dicta ipsam voluptates officia. Qui,
        culpa recusandae. Ducimus quas vitae dolorum voluptatibus, eveniet repellat quo,
        perspiciatis nostrum tempora beatae recusandae a porro non? Quasi quis aliquid quas facilis
        commodi eius! Dolore laborum, voluptatem cum laboriosam labore soluta.
      </div>
    </div>
  );
};
