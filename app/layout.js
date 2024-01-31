import { Lusitana, Roboto } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ['400', '700'] })
const lusitana = Lusitana({ subsets: ["latin"], weight: ['400', '700'] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <p className={lusitana.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ad et quasi beatae doloremque optio voluptates qui blanditiis eligendi ipsam deserunt, hic veritatis saepe tempore quas ipsa, pariatur similique debitis.
          Illum possimus delectus quasi, voluptatibus repudiandae maxime tenetur ex laborum voluptate necessitatibus. Corrupti dicta, porro voluptatibus soluta mollitia amet, reprehenderit dignissimos expedita excepturi, nemo iste. Inventore accusamus aperiam dolore veritatis.
          Consectetur porro aliquid laborum deleniti minus ipsum, dolores quibusdam perferendis facilis nobis assumenda libero odit sit doloribus adipisci repellat quidem quo reiciendis distinctio optio accusantium harum iusto animi. Dolorem, tempora.
          Vitae sint reiciendis minima temporibus perspiciatis laborum, animi voluptas nam officiis provident dicta quidem nemo alias cum minus nulla perferendis! Ex ipsam aut vel nihil similique illum porro perferendis fuga!
        </p>
        {children}</body>
    </html>
  );
}
