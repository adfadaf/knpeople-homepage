import { company } from "../../db/db";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus, faCar } from "@fortawesome/free-solid-svg-icons";

import mapCss from "./map.module.css";
import { useCallback, useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef(null);

  const transport = [
    {
      icon: faCar,
      title: "지하철로 오시는 길",
      content:
        "지하철 2호선 '강변역(동서울터미널역)' 2번출구 방향으로 나오셔서 엔터식스 지하로 오셔서 엘리베이터 타시면 됩니다.",
      color: "#000",
    },
    {
      icon: faBus,
      title: "버스로 오시는 길",
      content:
        "강변역 또는 테크노마트 앞 정류장에서 하차 후 테크노마트의 엘리베이터를 타면 됩니다.",
      color: "#1e70c0",
    },
    {
      icon: faCar,
      title: "자가용으로 오시는 길",
      content:
        "강변 테크노마트 지하 주차장에 주차 후 엘리베이터를 타시면 됩니다.",
      color: "#848484",
    },
  ];

  // const initMap = useCallback(() => {
  //   new window.google.maps.Map(mapRef.current, {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // }, [mapRef]);

  // useEffect(() => {
  //   initMap();
  // }, [initMap]);

  return (
    <section>
      <div className={`container`}>
        {/* <div className={`map ${mapCss.map}`} ref={mapRef} /> */}
        <div className={`${mapCss.addr}`}>
          <p>
            {company.address} | {company.tel}
          </p>
        </div>

        <ul className={`${mapCss.transport}`}>
          {transport.map((data, i) => {
            return (
              <li key={i}>
                <div className={`${mapCss.icon}`}>
                  <FontAwesomeIcon
                    icon={data.icon}
                    style={{ color: data.color }}
                  />
                </div>
                <div className={`${mapCss.transprotWrap}`}>
                  <p className={`${mapCss.title}`}>{data.title}</p>
                  <p className={`${mapCss.content}`}>{data.content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
