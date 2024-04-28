import styles from "./page.module.css";
import person from "../images/person.png";
import Button from "@/components/Button";
import Image from "next/image";
import Ellipse from "../images/ellipse.png";

export default function Home() {
  return (
    <section className="homeBanner space-around">
      <div className="leftBanner">
        <span className="freshArrivals">Fresh Arrivals Online</span>
        <br/>
        <p className="discoverNew">Discover Our Newest Collection Today</p>
        <br/>
        <Button param={"View Collection"} className="viewCollection"/>
      </div>
      <div className="rightBanner">
        <Image src={Ellipse} alt="person" height={300} className="circle"></Image>
        <Image src={person} alt="person" height={300} className="personImage"></Image>
      </div>
    </section>
  );
}
