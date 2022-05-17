import Image from "next/image";
import Hero from "../components/hero";
import EarthImg from "@/public/earth.jpg";
import SpaceImg from "@/public/space.jpg";
import SpaceWalker from "@/public/space-walker.jpg";
import Layout from "@/components/layout";

export default function Home() {
	return (
    <Layout>
      <section>
        <Hero />
        <section className="nxt-my-12">
          <div className="nxt-flex nxt-flex-col nxt-items-center nxt-mb-8">
            <h1 className="nxt-font-semibold nxt-text-4xl">Hello World</h1>
            <div className="nxt-h-px nxt-w-24 nxt-bg-gray-500 nxt-my-4"></div>
          </div>
          <div className="nxt-w-10/12 nxt-mx-auto nxt-flex nxt-flex-col nxt-justify-between nxt-max-w-7xl md:nxt-flex-row">
            <div className="nxt-flex nxt-flex-col nxt-mb-4 md:nxt-mr-2">
              <Image
                src={EarthImg}
                alt="Earth from space"
                width={380}
                height={400}
              />
              <div className="nxt-mt-3">
                <h2 className="nxt-text-xl nxt-font-medium nxt-mb-2">Earth</h2>
                <p className="nxt-text-base nxt-font-normal nxt-italic">
                  Earth from space
                </p>
              </div>
            </div>
            <div className="nxt-flex nxt-flex-col nxt-mb-4 md:nxt-mr-2">
              <Image
                src={SpaceImg}
                alt="Planet Jupiter"
                width={380}
                height={400}
              />
              <div className="nxt-mt-3">
                <h2 className="nxt-text-xl nxt-font-medium nxt-mb-2">
                  Jupiter
                </h2>
                <p className="nxt-text-base nxt-font-normal nxt-italic">
                  Lagest planet in our solar system
                </p>
              </div>
            </div>
            <div className="nxt-flex nxt-flex-col nxt-mb-4 md:nxt-mr-2">
              <Image
                src={SpaceWalker}
                alt="Earth Photographer"
                width={380}
                height={400}
              />
              <div className="nxt-mt-3">
                <h2 className="nxt-text-xl nxt-font-medium nxt-mb-2">
                  Space walker
                </h2>
                <p className="nxt-text-base nxt-font-normal nxt-italic">
                  Man taking photograph from space
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
}
