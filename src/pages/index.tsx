/* eslint-disable import/no-duplicates */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import Navigation from "@/components/Navigation";
import Arrow from "@/components/Icons/Arrow";
import Footer from "@/components/Footer";
import TextReveal from "@/components/Animations/Text/TextReveal";
import GradientReveal from "@/components/Animations/Text/Gradient";
import Link from "next/link";
import Transition from "@/components/Transition";
import ScrollUp from "@/utils/scrollUp";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "250vh"]);
  const yTitle = useTransform(scrollYProgress, [0, 1], ["0vh", "-35vh"]);

  const handleMouseEnter = (title: any) => {
    const firstPhoto = document.querySelector(".first-photo") as HTMLElement;
    const secondPhoto = document.querySelector(".second-photo") as HTMLElement;
    const thirdPhoto = document.querySelector(".third-photo") as HTMLElement;
    if (title === "conserve") {
      firstPhoto.style.opacity = "1";
      secondPhoto.style.opacity = "0";
      thirdPhoto.style.opacity = "0";
    } else if (title === "nurture") {
      secondPhoto.style.opacity = "1";
      firstPhoto.style.opacity = "0";
      thirdPhoto.style.opacity = "0";
    } else if (title === "explore") {
      thirdPhoto.style.opacity = "1";
      secondPhoto.style.opacity = "0";
      firstPhoto.style.opacity = "0";
    }
  };

  const dividerRef = useRef() as any;

  const transition = {
    ease: "easeInOut",
  };

  const { scrollYProgress: dividerScrollYProgress } = useScroll({
    target: dividerRef,
    offset: ["start start", "end end"],
  });
  const dividerPathLengthValue = useTransform(
    dividerScrollYProgress,
    [1, 0],
    [0, 1]
  );

  const firstHeader = useRef(null);

  const { scrollYProgress: imageParallaxScrollProgress } = useScroll({
    target: firstHeader,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    imageParallaxScrollProgress,
    [0, 1],
    ["10%", "-10%"]
  );

  const secondHeader = useRef(null);

  const { scrollYProgress: secondImageParallaxScrollProgress } = useScroll({
    target: secondHeader,
    offset: ["start end", "end start"],
  });
  const secondImageY = useTransform(
    secondImageParallaxScrollProgress,
    [0, 1],
    ["10%", "-10%"]
  );

  const gallery = useRef() as any;
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress: GalleryParallax } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const galleryY = useTransform(GalleryParallax, [0, 1], [0, height * 1.8]);
  const galleryY2 = useTransform(GalleryParallax, [0, 1], [0, height * 3.3]);
  const galleryY3 = useTransform(GalleryParallax, [0, 1], [0, height * 1]);
  const galleryY4 = useTransform(GalleryParallax, [0, 1], [0, height * 0.1]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    resize();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const [lastIndex, setLastIndex] = useState<string | null>(null);

  useEffect(() => {
    const activities =
      document.querySelectorAll<HTMLLIElement>(".activities li");
    const images = document.querySelectorAll<HTMLDivElement>(".imagewrap");

    activities.forEach((activity) => {
      const handleMouseOver = () => {
        const index = activity.getAttribute("data-index");
        if (index) {
          setLastIndex(index);
          images.forEach((image) => {
            if (image.getAttribute("data-index") === index) {
              image.style.display = "block";
            } else {
              image.style.display = "none";
            }
          });
        }
      };

      const handleMouseOut = () => {
        images.forEach((image) => {
          image.style.display = "none";
        });
        if (lastIndex) {
          const lastImage = document.querySelector<HTMLDivElement>(
            `.imagewrap[data-index="${lastIndex}"]`
          );
          if (lastImage) {
            lastImage.style.display = "block";
          }
        }
      };

      activity.addEventListener("mouseover", handleMouseOver);
      activity.addEventListener("mouseout", handleMouseOut);

      // Clean up event listeners
      return () => {
        activity.removeEventListener("mouseover", handleMouseOver);
        activity.removeEventListener("mouseout", handleMouseOut);
      };
    });
  }, [lastIndex]);

  const heroRef = useRef(null) as any;

  useEffect(() => {
    ScrollUp();
  }, []);

  return (
    <>
      <Transition>
        <Navigation hero={heroRef} />
        <main>
          <section id="home" ref={heroRef}>
            <div className="content">
              <div className="wrapper sm-w">
                <div className="heading">
                  <motion.div style={{ y: yTitle }} className="title">
                    <TextReveal
                      paragraphs={["Discover the essence of the Mara"]}
                      style="subheading"
                    />
                    <TextReveal
                      paragraphs={[
                        'A <span class="italic">private sanctuary</span>',
                        "dedicated to conservation",
                        'and bespoke <span class="italic">experiences</span>',
                      ]}
                      style="heading"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="background">
              <div className="overlay"></div>
              <motion.div className="videowrap" style={{ y }}>
                <video
                  className="video"
                  src="https://cdn.narrativ.vtal.dev/loirienmaravideo.mp4"
                  playsInline
                  autoPlay
                  muted
                  loop
                />
              </motion.div>
            </div>
          </section>
          <section id="about">
            <div className="wrapper">
              <div className="row">
                <div className="col-md-6">
                  <div className="title">
                    <div className="title-wrap">
                      <Link href="/conserve" passHref scroll={false}>
                        <h3
                          className="heading"
                          onMouseEnter={() => handleMouseEnter("conserve")}
                        >
                          <TextReveal
                            paragraphs={["Conserve"]}
                            style="heading"
                            delay={0}
                          />
                          <Arrow style="arrow" color="#282828" />
                        </h3>
                      </Link>
                      <Link href="/nurture" passHref scroll={false}>
                        <h3
                          className="heading italic"
                          onMouseEnter={() => handleMouseEnter("nurture")}
                        >
                          <TextReveal
                            paragraphs={['<span class="italic">Nurture</span>']}
                            style="heading"
                            delay={0.1}
                          />
                          <Arrow style="arrow" color="#282828" />
                        </h3>
                      </Link>
                      <Link href="/explore" passHref scroll={false}>
                        <h3
                          className="heading"
                          onMouseEnter={() => handleMouseEnter("explore")}
                        >
                          <TextReveal
                            paragraphs={["Explore"]}
                            style="heading"
                            delay={0.2}
                          />
                          <Arrow style="arrow" color="#282828" />
                        </h3>
                      </Link>
                    </div>
                    <p>
                      Welcome to LOIRIEN Mara, a sanctuary nestled within the
                      private Partakilat Conservancy in the heart of the Maasai
                      Mara. With a deep commitment to conservation, we offer an
                      unparalleled retreat that connects you intimately with the
                      land&apos;s beauty and culture while providing an oasis
                      for rejuvenation and inspiration.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 photos">
                  <Image
                    width={900}
                    height={1200}
                    className="photo first-photo"
                    src="/conserve.jpg"
                    alt="LOIRIEN Mara conserve photograph"
                    placeholder="empty"
                    loading="lazy"
                  />
                  <Image
                    width={900}
                    height={1200}
                    className="photo second-photo"
                    src="/nurture.jpg"
                    alt="LOIRIEN Mara nurture photograph"
                  />
                  <Image
                    width={900}
                    height={1200}
                    className="photo third-photo"
                    src="/explore.jpg"
                    alt="LOIRIEN Mara explore photograph"
                  />
                </div>
              </div>
            </div>
          </section>
          <section id="shapedivider" ref={dividerRef}>
            <svg
              width="1920"
              height="412"
              viewBox="0 0 1920 412"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_53_532)">
                <motion.path
                  d="M-289.171 -863.047C-261.422 -860.782 -237.516 -852.532 -214.69 -844.654C-213.042 -844.086 -211.4 -843.519 -209.762 -842.956C-207.023 -842.017 -203.607 -840.622 -199.305 -838.866C-196.906 -837.887 -194.232 -836.795 -191.245 -835.607C-182.938 -832.301 -172.307 -828.289 -158.718 -823.987C-131.539 -815.384 -92.5583 -805.633 -36.6914 -798.063C-1.61193 -793.31 20.7465 -783.869 39.7832 -772.246C49.191 -766.502 57.7833 -760.229 66.7081 -753.712L67.0654 -753.451C76.1112 -746.846 85.5075 -740.001 96.4134 -733.248C132.856 -710.685 179.412 -698.537 225.356 -686.55C232.299 -684.738 239.229 -682.93 246.107 -681.09C298.549 -667.063 348.134 -651.176 379.144 -617.79C392.576 -603.329 402.049 -588.451 410.744 -573.687C412.507 -570.694 414.238 -567.705 415.964 -564.725C422.746 -553.016 429.446 -541.448 437.667 -530.317C458.314 -502.367 488.607 -477.103 554.072 -459.004C582.894 -451.034 612.967 -445.816 642.911 -440.62C648.207 -439.702 653.499 -438.783 658.779 -437.851C693.946 -431.639 728.625 -424.785 760.775 -412.837C773.794 -407.999 786.532 -401.591 799.398 -394.596C804.804 -391.657 810.245 -388.607 815.736 -385.529C823.277 -381.301 830.914 -377.02 838.689 -372.898C865.596 -358.633 894.58 -346.034 928.715 -343.287C962.683 -340.555 988.147 -348.371 1014.2 -356.367L1015.79 -356.857C1042.46 -365.036 1069.96 -373.197 1108.14 -370.597C1151 -367.678 1183.01 -367.625 1209.22 -373.065C1235.44 -378.507 1255.78 -389.432 1275.41 -408.38C1312.52 -444.194 1359.81 -453.718 1424.04 -466.654C1429.29 -467.712 1434.66 -468.792 1440.14 -469.911C1454.57 -472.86 1468.02 -475.959 1480.84 -478.915C1486.93 -480.318 1492.87 -481.688 1498.71 -482.995C1516.89 -487.059 1534.12 -490.513 1551.65 -492.435C1586.68 -496.276 1622.97 -494.016 1670.56 -478.236C1709.71 -465.25 1750.18 -459.663 1789.91 -454.178C1793.94 -453.621 1797.96 -453.066 1801.97 -452.504C1845.59 -446.396 1888.08 -439.51 1927.07 -422.142C1931.19 -420.305 1935.29 -418.489 1939.34 -416.689C2004.38 -387.847 2060.44 -362.987 2080.88 -319.602L2081.49 -319.602L2080.88 -319.602C2088.63 -303.168 2103.22 -287.023 2117.72 -270.979C2119.12 -269.431 2120.52 -267.883 2121.91 -266.337C2137.74 -248.747 2152.66 -231.251 2157.67 -213.509C2162.69 -195.742 2156.85 -179.296 2149.4 -162.989C2148.12 -160.199 2146.8 -157.413 2145.48 -154.625C2139.07 -141.134 2132.64 -127.601 2131.51 -113.403C2130.25 -97.5589 2130 -81.6705 2129.76 -65.7862C2129.3 -35.1856 2128.83 -4.60049 2121.06 25.6229C2116.41 43.7421 2106.47 59.1185 2094.66 75.4922C2086.24 87.1573 2076.25 93.8761 2062.81 99.1533C2052.31 103.277 2039.7 106.52 2024.04 110.551C2019.61 111.69 2014.94 112.893 2010 114.196C1957.95 127.925 1911.34 145.135 1871.17 166.157C1854.65 174.8 1841.35 185.071 1828.12 195.293C1826.44 196.589 1824.77 197.885 1823.08 199.177C1808.12 210.658 1792.73 221.811 1772.35 230.297C1745.93 241.291 1716.31 249.067 1686.15 250.202C1656.02 251.336 1625.33 245.85 1596.63 230.289C1591.29 227.392 1586.52 223.796 1581.8 219.95C1580.24 218.677 1578.69 217.375 1577.12 216.063C1573.97 213.427 1570.78 210.752 1567.41 208.198C1557.3 200.535 1545.41 193.785 1527.69 191.938C1516.77 190.8 1505.43 191.6 1493.86 193.414C1482.28 195.229 1470.41 198.069 1458.4 201.038C1457.03 201.378 1455.65 201.719 1454.27 202.061C1443.61 204.709 1432.86 207.378 1422.1 209.46C1409.95 211.812 1397.83 213.406 1385.87 213.377C1377.37 213.357 1367.46 212.738 1356.89 211.958C1353.93 211.74 1350.91 211.508 1347.86 211.274C1340.04 210.675 1332 210.059 1324.02 209.592C1301.86 208.293 1280.05 208.134 1264.83 212.743C1245.09 218.724 1237.52 230.756 1232.11 243.495C1231 246.111 1229.99 248.752 1228.97 251.379C1227.51 255.169 1226.06 258.93 1224.36 262.545C1221.49 268.654 1217.92 274.291 1212.42 278.825C1190.01 297.33 1154.44 302.591 1114.83 303.996C1098.61 304.571 1081.74 304.499 1064.81 304.427C1061.05 304.411 1057.29 304.395 1053.54 304.386C1032.88 304.337 1012.35 304.502 993.147 306.066C960.646 308.71 914.773 313.11 886.779 320.68C874.437 324.019 865.046 328.811 856.003 333.703C855.049 334.219 854.098 334.737 853.148 335.254C845.089 339.64 837.094 343.992 827.262 347.385C805.738 354.815 780.454 358.15 755.544 356.368C730.654 354.587 706.105 347.696 685.972 334.63C672.87 326.127 664.908 318.203 657.318 310.649C654.664 308.008 652.056 305.413 649.29 302.853C638.613 292.976 625.657 283.734 598.814 274.797L598.577 275.06L598.814 274.797C578.073 267.893 556.516 262.355 534.984 256.822L533.566 256.458C511.548 250.801 489.573 245.118 468.445 237.944C450.741 231.932 432.586 225.173 414.032 218.232L410.795 217.021C393.281 210.467 375.419 203.783 357.278 197.453C318.76 184.012 278.922 172.143 238.333 166.464C220.019 163.9 201.967 163.09 184.034 162.286C182.442 162.214 180.851 162.143 179.261 162.071C159.734 161.18 140.322 160.111 120.698 156.624C105.138 153.86 89.664 149.808 74.2861 145.725L72.1892 145.168C57.5372 141.275 42.9707 137.404 28.5838 134.681C-2.74438 128.752 -25.0982 129.089 -44.2875 133.62C-63.4328 138.141 -79.3938 146.832 -97.9961 157.547C-101.648 159.651 -105.297 161.847 -108.968 164.056C-113.796 166.961 -118.661 169.889 -123.621 172.66C-132.337 177.53 -141.265 181.869 -150.594 184.643C-159.923 187.417 -169.592 188.609 -179.799 187.244C-189.994 185.879 -200.869 181.944 -212.611 174.307C-237.404 158.184 -250.247 139.588 -256.283 120.593C-262.32 101.598 -261.543 82.2284 -259.135 64.5777C-257.327 51.3235 -258.505 37.5597 -259.685 23.776C-260.141 18.4465 -260.597 13.1141 -260.881 7.80701C-261.901 -11.2418 -260.707 -29.9941 -249.388 -47.2498C-243.741 -55.859 -236.983 -64.2376 -230.137 -72.5995C-229.553 -73.3127 -228.969 -74.0258 -228.384 -74.7389C-222.117 -82.3839 -215.849 -90.0301 -210.373 -97.8301C-198.398 -114.886 -190.189 -132.704 -194.032 -152.939C-199.464 -181.551 -237.024 -208.945 -281.964 -234.42C-303.629 -246.701 -327.039 -258.552 -349.434 -269.889L-351.951 -271.164C-375.114 -282.892 -397.065 -294.059 -414.777 -304.596C-458.853 -330.816 -478.957 -351.621 -484.211 -373.045C-489.472 -394.497 -479.862 -416.608 -464.312 -445.44C-451.672 -468.882 -478.866 -487.286 -506.158 -505.755L-506.304 -505.854C-533.685 -524.384 -561.112 -543.001 -549.861 -567.125C-547.083 -573.083 -543.983 -578.512 -540.997 -583.742C-532.455 -598.701 -524.842 -612.035 -528.35 -631.469C-530.501 -643.382 -536.261 -655.202 -542 -666.979L-542.806 -668.634C-548.808 -680.968 -554.603 -693.26 -556.084 -705.628C-561.06 -747.19 -516.297 -790.047 -453.562 -812.042C-441.248 -816.359 -429.377 -822.09 -417.365 -828.15C-415.088 -829.299 -412.806 -830.46 -410.515 -831.626C-400.711 -836.613 -390.738 -841.686 -380.265 -846.284C-354.415 -857.632 -325.643 -866.024 -289.171 -863.047Z"
                  stroke="#C5C1B6"
                  style={{
                    pathLength: useSpring(dividerPathLengthValue, {
                      stiffness: 500,
                      damping: 100,
                    }),
                  }}
                  transition={transition}
                />
                <motion.path
                  d="M-149.36 -868.733C-121.612 -866.468 -97.7056 -858.217 -74.8795 -850.34C-73.2317 -849.771 -71.5895 -849.205 -69.9519 -848.642C-67.2126 -847.702 -63.7968 -846.308 -59.4946 -844.552C-57.0957 -843.572 -54.4212 -842.481 -51.4346 -841.292C-43.1272 -837.987 -32.4962 -833.974 -18.9078 -829.673C8.27121 -821.069 47.2522 -811.319 103.119 -803.749C138.199 -798.996 160.557 -789.554 179.594 -777.932C189.002 -772.188 197.594 -765.914 206.519 -759.398L206.876 -759.137C215.922 -752.532 225.318 -745.686 236.224 -738.934C272.667 -716.37 319.222 -704.223 365.166 -692.235C372.11 -690.424 379.039 -688.616 385.918 -686.776C438.36 -672.749 487.945 -656.862 518.955 -623.476C532.386 -609.015 541.859 -594.137 550.554 -579.373C552.317 -576.38 554.049 -573.391 555.775 -570.411C562.556 -558.702 569.256 -547.134 577.478 -536.003C598.124 -508.052 628.417 -482.789 693.883 -464.69C722.705 -456.72 752.777 -451.502 782.721 -446.306C788.017 -445.387 793.309 -444.469 798.59 -443.536C833.757 -437.325 868.436 -430.471 900.586 -418.523C913.604 -413.684 926.343 -407.277 939.209 -400.282C944.615 -397.342 950.055 -394.292 955.547 -391.214C963.088 -386.987 970.725 -382.706 978.499 -378.584C1005.41 -364.319 1034.39 -351.719 1068.53 -348.973C1102.49 -346.241 1127.96 -354.057 1154.01 -362.052L1155.6 -362.543C1182.27 -370.722 1209.77 -378.882 1247.95 -376.283C1290.81 -373.364 1322.82 -373.31 1349.03 -378.751C1375.25 -384.193 1395.59 -395.118 1415.22 -414.066C1452.33 -449.88 1499.62 -459.404 1563.85 -472.34C1569.1 -473.397 1574.47 -474.478 1579.95 -475.597C1594.38 -478.545 1607.83 -481.645 1620.65 -484.601C1626.74 -486.004 1632.68 -487.374 1638.52 -488.681C1656.7 -492.745 1673.93 -496.198 1691.46 -498.121C1726.49 -501.962 1762.78 -499.702 1810.37 -483.921C1849.53 -470.936 1889.99 -465.349 1929.72 -459.863C1933.75 -459.307 1937.77 -458.751 1941.78 -458.189C1985.4 -452.081 2027.89 -445.196 2066.88 -427.827C2071 -425.991 2075.1 -424.175 2079.16 -422.375C2144.19 -393.533 2200.25 -368.672 2220.69 -325.287L2221.3 -325.288L2220.69 -325.287C2228.44 -308.854 2243.03 -292.709 2257.53 -276.665C2258.93 -275.116 2260.33 -273.569 2261.72 -272.023C2277.55 -254.433 2292.47 -236.936 2297.48 -219.194C2302.5 -201.428 2296.66 -184.981 2289.21 -168.675C2287.93 -165.885 2286.61 -163.098 2285.29 -160.31C2278.88 -146.819 2272.45 -133.287 2271.32 -119.089C2270.06 -103.245 2269.82 -87.3561 2269.57 -71.4718C2269.11 -40.8712 2268.64 -10.2862 2260.87 19.9373C2256.22 38.0564 2246.28 53.4328 2234.47 69.8065C2226.05 81.4716 2216.06 88.1904 2202.62 93.4676C2192.12 97.5913 2179.51 100.835 2163.85 104.865C2159.42 106.005 2154.75 107.207 2149.81 108.511C2097.76 122.239 2051.15 139.45 2010.98 160.472C1994.46 169.114 1981.16 179.386 1967.93 189.607C1966.25 190.904 1964.58 192.199 1962.89 193.491C1947.94 204.973 1932.54 216.126 1912.16 224.611C1885.74 235.606 1856.13 243.381 1825.96 244.516C1795.83 245.65 1765.14 240.164 1736.44 224.604C1731.1 221.706 1726.33 218.11 1721.61 214.264C1720.05 212.991 1718.5 211.689 1716.93 210.377C1713.78 207.741 1710.59 205.066 1707.22 202.512C1697.11 194.85 1685.22 188.099 1667.5 186.253C1656.58 185.114 1645.24 185.914 1633.67 187.728C1622.09 189.544 1610.22 192.384 1598.21 195.352C1596.84 195.692 1595.46 196.034 1594.09 196.376C1583.42 199.023 1572.67 201.692 1561.91 203.775C1549.76 206.126 1537.64 207.721 1525.68 207.691C1517.18 207.671 1507.27 207.052 1496.71 206.272C1493.74 206.054 1490.72 205.823 1487.67 205.589C1479.85 204.99 1471.81 204.373 1463.84 203.906C1441.67 202.607 1419.86 202.448 1404.65 207.057C1384.9 213.038 1377.33 225.071 1371.92 237.809C1370.81 240.425 1369.8 243.066 1368.78 245.693C1367.32 249.484 1365.87 253.245 1364.17 256.859C1361.3 262.968 1357.73 268.606 1352.23 273.14C1329.82 291.645 1294.25 296.905 1254.64 298.31C1238.42 298.885 1221.55 298.814 1204.62 298.742C1200.86 298.726 1197.1 298.71 1193.35 298.701C1172.69 298.651 1152.16 298.816 1132.96 300.38C1100.46 303.025 1054.58 307.425 1026.59 314.994C1014.25 318.333 1004.86 323.126 995.814 328.017C994.859 328.534 993.909 329.051 992.959 329.568C984.9 333.955 976.904 338.307 967.072 341.699C945.549 349.129 920.264 352.465 895.354 350.682C870.464 348.901 845.916 342.01 825.782 328.945C812.68 320.441 804.719 312.518 797.128 304.963C794.475 302.323 791.867 299.727 789.1 297.167C778.424 287.29 765.467 278.049 738.624 269.111L738.387 269.374L738.624 269.111C717.883 262.207 696.327 256.669 674.794 251.137L673.376 250.772C651.359 245.115 629.383 239.432 608.255 232.259C590.552 226.247 572.396 219.487 553.843 212.546L550.605 211.335C533.091 204.782 515.23 198.098 497.088 191.767C458.57 178.327 418.732 166.457 378.143 160.778C359.829 158.214 341.778 157.405 323.844 156.6C322.253 156.529 320.662 156.457 319.072 156.385C299.545 155.494 280.133 154.425 260.508 150.938C244.949 148.174 229.475 144.123 214.097 140.039L212 139.482C197.348 135.589 182.781 131.719 168.394 128.996C137.066 123.067 114.712 123.403 95.5231 127.934C76.3777 132.455 60.4167 141.146 41.8145 151.861C38.1625 153.965 34.5134 156.161 30.8424 158.37C26.015 161.275 21.1494 164.204 16.1897 166.975C7.47369 171.845 -1.45471 176.183 -10.7836 178.957C-20.113 181.732 -29.7818 182.923 -39.9881 181.558C-50.1833 180.194 -61.0582 176.258 -72.8002 168.622C-97.5939 152.499 -110.436 133.902 -116.472 114.908C-122.509 95.9123 -121.732 76.5427 -119.325 58.8921C-117.517 45.6378 -118.695 31.874 -119.874 18.0903C-120.33 12.7608 -120.786 7.4284 -121.071 2.12135C-122.09 -16.9275 -120.896 -35.6798 -109.577 -52.9355C-103.93 -61.5446 -97.1729 -69.9233 -90.3269 -78.2852C-89.7429 -78.9984 -89.1583 -79.7115 -88.5737 -80.4245C-82.3066 -88.0696 -76.0385 -95.7157 -70.5622 -103.516C-58.5875 -120.572 -50.3788 -138.39 -54.2211 -158.625C-59.6539 -187.236 -97.2134 -214.631 -142.154 -240.106C-163.819 -252.386 -187.228 -264.237 -209.624 -275.575L-212.141 -276.849C-235.304 -288.577 -257.255 -299.745 -274.966 -310.282C-319.043 -336.501 -339.146 -357.306 -344.401 -378.731C-349.662 -400.182 -340.052 -422.293 -324.501 -451.126C-311.862 -474.567 -339.056 -492.971 -366.347 -511.441L-366.493 -511.54C-393.874 -530.07 -421.301 -548.687 -410.05 -572.811C-407.272 -578.769 -404.172 -584.198 -401.186 -589.428C-392.645 -604.387 -385.031 -617.721 -388.539 -637.155C-390.691 -649.068 -396.45 -660.887 -402.19 -672.665L-402.996 -674.319C-408.998 -686.653 -414.792 -698.946 -416.273 -711.314C-421.25 -752.875 -376.487 -795.733 -313.752 -817.727C-301.437 -822.045 -289.566 -827.775 -277.555 -833.836C-275.278 -834.985 -272.996 -836.146 -270.705 -837.312C-260.901 -842.299 -250.928 -847.372 -240.454 -851.97C-214.605 -863.317 -185.832 -871.709 -149.36 -868.733Z"
                  stroke="#C5C1B6"
                  style={{
                    pathLength: useSpring(dividerPathLengthValue, {
                      stiffness: 500,
                      damping: 100,
                    }),
                  }}
                  transition={transition}
                />
                <motion.path
                  d="M-233.136 -947.333C-205.388 -945.068 -181.482 -936.818 -158.656 -928.94C-157.008 -928.371 -155.366 -927.805 -153.728 -927.242C-150.989 -926.302 -147.573 -924.908 -143.271 -923.152C-140.872 -922.172 -138.197 -921.081 -135.211 -919.892C-126.903 -916.587 -116.272 -912.574 -102.684 -908.273C-75.505 -899.669 -36.5241 -889.919 19.3429 -882.349C54.4224 -877.596 76.7808 -868.155 95.8175 -856.532C105.225 -850.788 113.818 -844.514 122.742 -837.998L123.1 -837.737C132.145 -831.132 141.542 -824.287 152.448 -817.534C188.89 -794.97 235.446 -782.823 281.39 -770.835C288.333 -769.024 295.263 -767.216 302.142 -765.376C354.584 -751.349 404.169 -735.462 435.178 -702.076C448.61 -687.615 458.083 -672.737 466.778 -657.973C468.541 -654.98 470.272 -651.991 471.998 -649.011C478.78 -637.302 485.48 -625.734 493.702 -614.603C514.348 -586.652 544.641 -561.389 610.107 -543.29C638.929 -535.32 669.001 -530.102 698.945 -524.906C704.241 -523.987 709.533 -523.069 714.814 -522.136C749.981 -515.925 784.659 -509.071 816.809 -497.123C829.828 -492.285 842.566 -485.877 855.432 -478.882C860.839 -475.942 866.279 -472.893 871.77 -469.814C879.312 -465.587 886.948 -461.306 894.723 -457.184C921.63 -442.919 950.614 -430.32 984.749 -427.573C1018.72 -424.841 1044.18 -432.657 1070.23 -440.653L1071.83 -441.143C1098.49 -449.322 1126 -457.482 1164.18 -454.883C1207.03 -451.964 1239.05 -451.91 1265.26 -457.351C1291.48 -462.793 1311.82 -473.718 1331.44 -492.666C1368.55 -528.48 1415.84 -538.004 1480.07 -550.94C1485.33 -551.997 1490.69 -553.078 1496.17 -554.197C1510.61 -557.145 1524.05 -560.245 1536.88 -563.201C1542.96 -564.604 1548.9 -565.974 1554.75 -567.281C1572.93 -571.345 1590.15 -574.798 1607.69 -576.721C1642.71 -580.562 1679 -578.302 1726.59 -562.521C1765.75 -549.536 1806.21 -543.949 1845.94 -538.463C1849.97 -537.907 1853.99 -537.351 1858.01 -536.79C1901.62 -530.681 1944.12 -523.796 1983.1 -506.427C1987.23 -504.591 1991.32 -502.775 1995.38 -500.975C2060.42 -472.133 2116.47 -447.272 2136.91 -403.887L2137.52 -403.888L2136.91 -403.887C2144.66 -387.454 2159.25 -371.309 2173.76 -355.265C2175.16 -353.717 2176.55 -352.169 2177.95 -350.623C2193.77 -333.033 2208.69 -315.537 2213.7 -297.794C2218.72 -280.028 2212.89 -263.581 2205.43 -247.275C2204.16 -244.485 2202.83 -241.698 2201.51 -238.91C2195.1 -225.419 2188.68 -211.887 2187.54 -197.689C2186.28 -181.845 2186.04 -165.956 2185.8 -150.072C2185.33 -119.471 2184.86 -88.8863 2177.1 -58.6628C2172.44 -40.5437 2162.51 -25.1673 2150.69 -8.79361C2142.27 2.87155 2132.28 9.59032 2118.85 14.8675C2108.34 18.9912 2095.74 22.2346 2080.07 26.2651C2075.64 27.4047 2070.97 28.6073 2066.03 29.9105C2013.98 43.6392 1967.38 60.8494 1927.2 81.8715C1910.68 90.5144 1897.39 100.785 1884.16 111.007C1882.48 112.303 1880.8 113.599 1879.12 114.891C1864.16 126.373 1848.77 137.526 1828.38 146.011C1801.96 157.006 1772.35 164.781 1742.18 165.916C1712.06 167.05 1681.36 161.564 1652.66 146.004C1647.32 143.106 1642.55 139.51 1637.84 135.664C1636.28 134.391 1634.72 133.089 1633.16 131.777C1630.01 129.141 1626.81 126.466 1623.44 123.912C1613.34 116.25 1601.44 109.499 1583.73 107.653C1572.8 106.514 1561.47 107.314 1549.89 109.128C1538.31 110.944 1526.44 113.783 1514.44 116.752C1513.06 117.092 1511.69 117.434 1510.31 117.776C1499.65 120.423 1488.89 123.092 1478.13 125.175C1465.98 127.526 1453.86 129.12 1441.9 129.091C1433.4 129.071 1423.5 128.452 1412.93 127.672C1409.96 127.454 1406.95 127.223 1403.89 126.989C1396.08 126.39 1388.03 125.773 1380.06 125.306C1357.89 124.007 1336.09 123.848 1320.87 128.457C1301.12 134.438 1293.56 146.471 1288.15 159.209C1287.04 161.825 1286.02 164.466 1285.01 167.093C1283.55 170.884 1282.1 174.645 1280.4 178.259C1277.52 184.368 1273.95 190.006 1268.46 194.539C1246.04 213.045 1210.48 218.305 1170.87 219.71C1154.65 220.285 1137.77 220.213 1120.84 220.141C1117.09 220.125 1113.33 220.109 1109.57 220.101C1088.91 220.051 1068.39 220.216 1049.18 221.78C1016.68 224.425 970.807 228.825 942.813 236.394C930.471 239.733 921.08 244.526 912.038 249.417C911.083 249.934 910.132 250.451 909.182 250.968C901.123 255.355 893.128 259.706 883.296 263.099C861.772 270.529 836.488 273.864 811.578 272.082C786.688 270.301 762.139 263.41 742.006 250.345C728.904 241.841 720.942 233.917 713.352 226.363C710.698 223.722 708.09 221.127 705.324 218.567C694.648 208.69 681.691 199.449 654.848 190.511L654.611 190.774L654.848 190.511C634.107 183.607 612.55 178.069 591.018 172.537L589.6 172.172C567.582 166.515 545.607 160.832 524.479 153.659C506.775 147.647 488.62 140.887 470.066 133.946L466.829 132.735C449.315 126.181 431.453 119.498 413.312 113.167C374.794 99.7266 334.956 87.8572 294.367 82.178C276.053 79.6143 258.001 78.8045 240.068 78.0001C238.476 77.9287 236.886 77.8573 235.296 77.7848C215.768 76.8938 196.356 75.8248 176.732 72.3383C161.172 69.5742 145.698 65.5227 130.32 61.4393L128.223 60.8822C113.571 56.989 99.0049 53.1185 84.618 50.3957C53.2898 44.4666 30.936 44.8028 11.7468 49.334C-7.39861 53.8548 -23.3596 62.546 -41.9618 73.2609C-45.6138 75.3648 -49.263 77.5609 -52.9339 79.7701C-57.7614 82.6753 -62.627 85.6034 -67.5867 88.3746C-76.3026 93.2446 -85.231 97.583 -94.5599 100.357C-103.889 103.132 -113.558 104.323 -123.764 102.958C-133.96 101.594 -144.834 97.658 -156.576 90.0217C-181.37 73.8986 -194.212 55.3023 -200.249 36.3077C-206.285 17.3122 -205.508 -2.05737 -203.101 -19.708C-201.293 -32.9623 -202.471 -46.7261 -203.65 -60.5098C-204.107 -65.8393 -204.563 -71.1717 -204.847 -76.4788C-205.867 -95.5276 -204.673 -114.28 -193.354 -131.536C-187.707 -140.145 -180.949 -148.523 -174.103 -156.885C-173.519 -157.598 -172.935 -158.312 -172.35 -159.025C-166.083 -166.67 -159.815 -174.316 -154.339 -182.116C-142.364 -199.172 -134.155 -216.99 -137.997 -237.225C-143.43 -265.836 -180.99 -293.231 -225.93 -318.706C-247.595 -330.987 -271.005 -342.838 -293.4 -354.175L-295.917 -355.449C-319.08 -367.177 -341.031 -378.345 -358.743 -388.882C-402.819 -415.101 -422.922 -435.907 -428.177 -457.331C-433.438 -478.783 -423.828 -500.893 -408.277 -529.726C-395.638 -553.167 -422.832 -571.571 -450.124 -590.041L-450.27 -590.14C-477.65 -608.67 -505.078 -627.287 -493.826 -651.411C-491.049 -657.369 -487.949 -662.798 -484.962 -668.028C-476.421 -682.987 -468.807 -696.321 -472.315 -715.755C-474.467 -727.668 -480.227 -739.488 -485.966 -751.265L-486.772 -752.919C-492.774 -765.253 -498.568 -777.546 -500.049 -789.914C-505.026 -831.475 -460.263 -874.333 -397.528 -896.328C-385.214 -900.645 -373.342 -906.375 -361.331 -912.436C-359.054 -913.585 -356.772 -914.746 -354.481 -915.912C-344.677 -920.899 -334.704 -925.972 -324.231 -930.57C-298.381 -941.917 -269.608 -950.31 -233.136 -947.333Z"
                  stroke="#C5C1B6"
                  style={{
                    pathLength: useSpring(dividerPathLengthValue, {
                      stiffness: 500,
                      damping: 100,
                    }),
                  }}
                  transition={transition}
                />
              </g>
              <defs>
                <clipPath id="clip0_53_532">
                  <rect width="1920" height="412" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </section>
          <section id="villas">
            <div className="wrapper">
              <div className="title">
                <TextReveal
                  paragraphs={['Our <span class="italic">villas</span>']}
                  style="heading"
                />
                <div className="paragraph">
                  <p>
                    Experience unparalleled privacy and comfort in our villas,
                    each offering sweeping panoramic views and seamless
                    indooroutdoor living spaces, thoughtfully designed to
                    harmonize with the landscapes that inspired them.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Link href="/loirien" passHref scroll={false}>
                    <div className="card">
                      <div className="header full" ref={firstHeader}>
                        <motion.img
                          width={900}
                          height={1200}
                          className="image"
                          style={{ y: imageY }}
                          src="/loirien-villa.png"
                          alt="LOIRIEN villa house-front photo"
                        />
                      </div>
                      <div className="info">
                        <div>
                          <TextReveal
                            paragraphs={[
                              'LOIRIEN <span class="italic">Villa</span>',
                            ]}
                            style="villaheading"
                          />
                          <p>
                            A three-bedroom villa offering expansive bedrooms,
                            private terraces, an infinity pool and your own
                            personal spa. The gem of our collection.
                          </p>
                        </div>
                        <div className="goto">
                          <Arrow style="arrow" color="#ddd9ce" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link href="/kulaal" passHref scroll={false}>
                    <div className="card">
                      <div className="header" ref={secondHeader}>
                        <motion.img
                          width={900}
                          height={1200}
                          className="image"
                          style={{ y: secondImageY }}
                          src="/kulaal-villa.png"
                          alt="KULAAL villa house-front photo"
                        />
                      </div>
                      <div className="info">
                        <div>
                          <TextReveal
                            paragraphs={[
                              'KULAAL <span class="italic">Villa</span>',
                            ]}
                            style="villaheading"
                          />
                          <p>
                            Inspired by the spirit of bonfire camps, this
                            two-bedroom villa combines stunning vistas with a
                            warm, inviting atmosphere, featuring a private
                            fireplace and seamless indoor-outdoor living
                          </p>
                        </div>
                        <div className="goto">
                          <Arrow style="arrow" color="#ddd9ce" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link href="/naika" passHref scroll={false}>
                    <div className="card">
                      <div className="header" ref={secondHeader}>
                        <motion.img
                          width={900}
                          height={1200}
                          className="image"
                          style={{ y: secondImageY }}
                          src="/naika/exterior1.jpg"
                          alt="Naika villa house-front photo"
                        />
                      </div>
                      <div className="info">
                        <div>
                          <TextReveal
                            paragraphs={[
                              'NAIKA <span class="italic">Villa</span>',
                            ]}
                            style="villaheading"
                          />
                          <p>
                            A secluded retreat nestled among acacia trees, with
                            two bedrooms, an outdoor lounge for stargazing, and
                            a serene ambiance perfect for intimate escapes
                          </p>
                        </div>
                        <div className="goto">
                          <Arrow style="arrow" color="#ddd9ce" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <GradientReveal
              paragraph="Enjoy front-row seats to nature's grandest spectacle, the Great Migration, from the comfort of your home-away-from-home. Our dedicated team and star chef ensure every detail is taken care of, allowing you to explore the wild landscapes of the Mara and create unforgettable memories in absolute privacy."
              align="left"
              style="description"
            />
          </section>
          <section id="gallery" ref={gallery}>
            <div className="wrap">
              <Column images={[images[0], images[1], images[2]]} y={galleryY} />
              <Column
                images={[images[3], images[4], images[5]]}
                y={galleryY2}
              />
              <Column
                images={[images[6], images[7], images[8]]}
                y={galleryY3}
              />
              <Column
                images={[images[9], images[10], images[11]]}
                y={galleryY4}
              />
            </div>
          </section>
          <section id="activities">
            <div className="wrapper">
              <div className="title">
                <TextReveal
                  paragraphs={[
                    '<span class="italic">Curated</span>',
                    "experiences",
                  ]}
                  style="heading"
                />
                <div className="paragraph">
                  <p>
                    Explore. Taste. Learn. Play. — Dive into adventures that
                    awaken your senses, embracing the raw beauty and vibrant
                    spirit of the Maasai Mara.
                    <br />
                    <br />
                    <span className="flex h-end">
                      <Link href="/explore" passHref>
                        <span className="link green">
                          Explore all of our activities
                        </span>
                      </Link>
                    </span>
                  </p>
                </div>
              </div>
              <div className="items">
                <li>
                  <span>Game</span>
                  <div className="photo">
                    <Image
                      width={800}
                      height={500}
                      className="image"
                      style={{ transform: "translate(-50%, -60%) " }}
                      src="/gallery/animal.jpg"
                      alt="\0"
                    />
                  </div>
                  <span>Drives</span>
                </li>
                <li>
                  <span>Walking</span>
                  <div className="photo">
                    <Image
                      width={800}
                      height={500}
                      className="image"
                      src="/activities/walkingsafari.jpg"
                      alt="\0"
                    />
                  </div>
                  <span>Safaris</span>
                </li>
                <li>
                  <span>Rhino</span>
                  <div className="photo">
                    <Image
                      width={800}
                      height={500}
                      className="image"
                      src="/activities/rhinotrekking.jpg"
                      alt="\0"
                    />
                  </div>
                  <span>Trekking</span>
                </li>
                <li>
                  <span>Hot Air</span>
                  <div className="photo">
                    <Image
                      width={800}
                      height={500}
                      className="image"
                      style={{ transform: "translate(-50%, -45%) " }}
                      src="/activities/balloonbig.jpg"
                      alt="\0"
                    />
                  </div>
                  <span>Balloon</span>
                </li>
                <li>
                  <span>Helicopter</span>
                  <div className="photo">
                    <Image
                      width={800}
                      height={500}
                      className="image"
                      style={{ transform: "translate(-50%, -60%)" }}
                      src="/gallery/helicopter.jpg"
                      alt="\0"
                    />
                  </div>
                  <span>Safari</span>
                </li>
                <li>
                  <span>Cultural</span>
                  <div className="photo">
                    <Image
                      width={800}
                      height={500}
                      className="image"
                      src="/gallery/culturalimmersion.jpg"
                      alt="\0"
                    />
                  </div>
                  <span>Immersion</span>
                </li>
                <li>
                  <span>Fly</span>
                  <div className="photo">
                    <Image
                      width={800}
                      height={500}
                      className="image"
                      src="/gallery/flycamping.jpg"
                      alt="\0"
                    />
                  </div>
                  <span>Camping</span>
                </li>
                <li>
                  <span>Wine</span>
                  <div className="photo">
                    <Image
                      width={800}
                      height={500}
                      className="image"
                      src="/gallery/winetasting.jpg"
                      alt="\0"
                    />
                  </div>
                  <span>Tasting</span>
                </li>
                <li>
                  <span>Farm</span>
                  <div className="photo">
                    <Image
                      width={800}
                      height={500}
                      className="image"
                      src="/activities/farmvisits.jpg"
                      alt="\0"
                    />
                  </div>
                  <span>Visits</span>
                </li>
                <li>
                  <span>Star</span>
                  <div className="photo">
                    <Image
                      width={800}
                      height={500}
                      className="image"
                      src="/gallery/starysky.jpg"
                      alt="\0"
                    />
                  </div>
                  <span>Safari</span>
                </li>
              </div>
            </div>
          </section>
          <section id="bookings">
            <div className="wrapper">
              <div className="title">
                <TextReveal
                  paragraphs={['<span class="italic">Enquire</span>']}
                  style="heading"
                />
              </div>
              <rr-resnova
                widget-id="9bedce47-df65-43b1-b73d-3240436b35f8"
                api-url="https://resnova.resrequest.com/api/"
              />
            </div>
          </section>
          <section className="plax"></section>
          <Footer />
        </main>
      </Transition>
    </>
  );
}

const images = [
  "gallery/animal.jpg",
  "gallery/balloon.jpg",
  "gallery/bonfire.jpg",
  "gallery/zebras.jpg",
  "gallery/farm.jpg",
  "gallery/helicopter.jpg",
  "gallery/kulaalfood.jpg",
  "gallery/naika.jpg",
  "gallery/massage.jpg",
  "gallery/nyama.jpg",
  "gallery/picnic.jpg",
  "gallery/pool.jpg",
];

const Column = ({ images, y }: any) => {
  return (
    <motion.div className="column" style={{ y }}>
      {images.map((src: any, i: any) => {
        return (
          <div key={i} className="imageContainer">
            <Image src={`/${src}`} sizes="100%" quality={60} alt="\0" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
