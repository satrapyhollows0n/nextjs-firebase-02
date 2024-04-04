import { Inter } from "next/font/google";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Content from '../components/Content';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Nav />
      <Content>
        <h1>hello</h1>
      </Content>
      <Footer />
    </main>
  );
}
