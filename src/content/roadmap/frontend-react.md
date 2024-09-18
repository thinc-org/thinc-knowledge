---
title: 'Frontend Developer | React'
description: 'เรียนรู้การใช้ React ฉบับพื้นฐาน'
level: 'intermediate'
---

หลังจากที่ได้เรียน[พื้นฐานของการทำ Frontend Development](https://knowledge.thinc.in.th/roadmap/backend-beginner/) กันไปแล้ว ขั้นตอนต่อไปก็คือการใช้ UI Library ในการช่วยเราพัฒนาเว็บไซต์ ซึ่งเราจะมาเรียนรู้เกี่ยวกับ Library ยอดฮิตอย่าง [React](https://react.dev/) กัน

โดยในบทความนี้จะมีลิงก์ไปยังเว็บไซต์อื่น ๆ ซึ่งจะส่วนใหญ่จะเป็นลิงก์ไปที่ Documentation ของ React ซึ่งเขียนดีมาก ๆ แล้ว หากใครอยากดูคอนเทนต๋์ที่เป็นภาษาไทย หรืออยากเรียนจากในคลิป เราจะมีลิงก์คลิปที่แนะนำให้ดังต่อไปนี้

## แนะนำ Course สอน React

หากใครมีเวลาประมาณ 1-2 ชั่วโมง แล้วอยากเรียน React เป็นตั้งแต่ต้นจนจบภายในรวดเดียว แนะนำให้เข้าไปดู Resources เหล่านี้เลย

-   [Quick Start - React Docs](https://react.dev/learn)
-   [React Tutorial for Beginners](https://youtu.be/SqcY0GlETPk?si=ScVwMzAF1zrw772I)
-   [React for Everyone | สอน React ตั้งแต่เริ่มจนเขียนแอปได้ | Crash Course Series](https://youtu.be/mXjxKhWNHNo?si=dwItFFXvYbUbtoj1)

## What is React?

React คืออะไร ? ทำไมถึงเป็น Library ที่ทุกคนพูดถึงในทุกวันนี้ได้ ? หาคำตอบได้จากคลิปเหล่านี้

-   [React in 100 Seconds](https://youtu.be/Tn6-PIqc4UM?si=5iVyglNLst9cRAem)
-   [The Story of React](https://youtu.be/Wm_xI7KntDs?si=QHI6w8qvpTxgkR4c)

## Installation

ก่อนจะติดตั้ง React ได้ เราจะต้องติดตั้ง Node.js กันก่อน - [วิธีติดตั้ง Node.js และ NPM ในทุก Platform](https://medium.com/@betichhh/%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87-node-js-%E0%B9%81%E0%B8%A5%E0%B8%B0-npm-%E0%B9%83%E0%B8%99%E0%B8%97%E0%B8%B8%E0%B8%81-platform-windows-macos-linux-cb17de1b68e0)

วิธีการติดตั้ง React - [Start a new React Project - React Docs](https://react.dev/learn/start-a-new-react-project)

## Describing UI in React - Components

React มีวิธีการจัดการกับพัฒนา User Interface (UI) ด้วยการแยกของแต่ละส่วนใน UI อออกมาเป็นชิ้นเล็ก ๆ (เช่น buttons, cards) โดยแต่ละชิ้นเล็ก ๆ นั้นเราจะเรียกว่า Component

[๋JSX (JavaScript Syntax Extension)](<https://en.wikipedia.org/wiki/JSX_(JavaScript)>) เป็น Syntax Extension ของ React ที่ทำให้เรา จะทำให้เราสามารถผสม Logic ของ JavaScript ไปพร้อมกับการเขียน Markup ที่คล้ายกับ HTML ได้

-   [Describing the UI - React Docs](https://react.dev/learn/describing-the-ui)

### Declaring Components

วิธีการสร้าง Component ใน React

-   [Your First Component - React Docs](https://react.dev/learn/your-first-component)
-   [Importing and Exporting Components - React Docs](https://react.dev/learn/importing-and-exporting-components)

### JSX

Syntax เบื้องต้นของ JSX - เครื่องมือที่สามารถทำให้เราใช้ Logic เหมือน JavaScript ได้ในตัว UI ของเรา

-   [Writing Markup with JSX - React Docs](https://react.dev/learn/writing-markup-with-jsx)
-   [JavaScript in JSX with Curly Braces - React Docs](https://react.dev/learn/javascript-in-jsx-with-curly-braces)

### Props & Children

วิธีการส่งข้อมูลของ Component

-   [Passing Props to a Component - React Docs](https://react.dev/learn/passing-props-to-a-component)

### Conditional Rendering

JSX ทำให้เราสามารถใส่ Logic ของ React ข้างในตัว UI ของเราได้ เราจึงสามารถใช้ logic เหล่านั้นเพื่อเลือกที่จะแสดงข้อมูลบางส่วนหรือไม่ได้

-   [Conditional Rendering - React Docs](https://react.dev/learn/conditional-rendering)

### Rendering Lists

เราสามารถ​ Render ตัว List ข้อมูลจาก JavaScript มาเป็น UI ได้ ซึ่งเป็นหนึ่งเครื่องมือที่สำคัญที่สุดในการสร้าง UI ได้ React

-   [Rendering Lists - React Docs](https://react.dev/learn/rendering-lists)

## Interactivity - การตอบสนองกับ User

จุดเด่นของ React คือการที่ User Interface (UI) สามารถ render ใหม่ได้เรื่อย ๆ ตามค่าตัวแปรที่เปลี่ยนไป (เรียกได้ว่าตัว UI จะ 'React' ต่อการเปลี่ยนค่าของตัวแปร) ซึ่งเราสามารถ declare และแก้ตัวแปรเหล่าได้โดยการสร้าง 'state' ใน Component ของเรา

โดย State จะทำให้ Component นั้นสามารถเก็บค่าตัวแปรได้ เหมือนเป็นความทรงจำของ Component นั้น ๆ และสามารถส่งต่อค่าเหล่านั้นเป็น Props ได้ ซึ่งคอนเซปต์ของการสร้าง State จะเป็นรากฐานของการสร้าง Web Application ใน React ที่สามารถตอบสนองกับ User Input ได้

-   [Adding Interactivity - React Docs](https://react.dev/learn/adding-interactivity)
-   [Managing State - React Docs](https://react.dev/learn/managing-state)

### Responding to Events

เราสามารถเขียน Logic ด้วย JavaScript เพื่อรองรับ Event ที่เกิดขั้นใน UI ได้ ซึ่งใน React จะมีวิธีการส่ง Event Handlers ที่แตกต่างจากการใช้ Vanilla JavaScript นิดหน่อย

-   [Responding to Events - React Docs](https://react.dev/learn/responding-to-events)

### Declaring States - ควาทรงจำของ Component

วิธีการประกาศ State - ควาทรงจำของ Component

-   [State: A Component's Memory - React Docs](https://react.dev/learn/state-a-components-memory)

### UI Rendering in React

เมื่อมีการ Update State แล้ว React จะมีการ Re-render ยังไงบ้าง ? ทำไมบางทีเราลอง `setState` หลายรอบแล้ว State ไม่อัปเดตตามล่ะ ? หาคำตอบได้ที่นี่

-   [Render and Commit - React Docs](https://react.dev/learn/render-and-commit)
-   [State as a Snapshot - React Docs](https://react.dev/learn/state-as-a-snapshot)
-   [Queueing a Series of State Updates - React Docs](https://react.dev/learn/queueing-a-series-of-state-updates)

### Updating State

States ใน React สามารถเป็น Object และ Array ได้ ซึ่งเราจะได้ใช้ State ที่เป็น Type เหล่านี้ใน UI ของเราบ่อยครั้ง มาเรียนรู้วิธีการอัปเดต State ประเภทเหล่านี้กัน (ระวังเรื่อง mutation นะ !)

-   [Updating Objects in State - React Docs](https://react.dev/learn/updating-objects-in-state)
-   [Updating Arrays in State - React Docs](https://react.dev/learn/updating-arrays-in-state)

### Keeping Components Pure

คอนเซปต์สำคัญที่สุดของการสร้าง UI ใน React คือการที่ทุก Component เป้น pure function​ ซึ่งแปลว่าทุก function จะไม่มีการแก้ค่าของตัวแปรนอก scope ของตัวเอง โดยการแก้ตัวแปรที่ประกาศด้วย `let` ใน scope ข้างนอก Component ใน React เป็นสิ่งที่ไม่ควรทำ เนื่องจากจะทำให้เกิด mutation ซึ่งจะทำให้เกิด side effect ที่ตามหาที่มาของ Bug ได้ยาก

-   [Keeping Components Pure - React Docs](https://react.dev/learn/keeping-components-pure)

## Syncing with External Systems and Data

อีกหนึ่งคอนเซปต์ที่สำคัญของ React คือการดึงและ Synchronize ข้อมูลจากนอกระบบนอก React (เช่น การดักฟัง Input จาก Browser, หรือการดึงข้อมูลด้วยการ Fetch) โดย React จะมีวิธีการจัดการกับข้อมูลเหล่านี้หลัก ๆ คือด้วยการใช้ Effect, Ref หรือการสร้าง Custom Hooks

-   [Escape Hatches - React Docs](https://react.dev/learn/escape-hatches)

### Refs

Ref เป็นการเก็บข้อมูลแบบหนึ่งของ React (คล้ายกับ State) ที่จะไม่ทำให้ Component Re-render เมื่อค่าเปลี่ยนไป โดย ref จะใช้บ่อยในการจัดการกับ API ที่เกี่ยวกับ Browser เช่น การดึงข้อมูลจาก Element

-   [Referencing Values with Refs - React Docs](https://react.dev/learn/referencing-values-with-refs)
-   [Manipulating the DOM with Refs - React Docs](https://react.dev/learn/manipulating-the-dom-with-refs)
-   [useRef - React Docs](https://react.dev/reference/react/useRef)

### Effects

React มี Hook ที่ชื่อว่า `useEffect` ที่สามารถทำให้เราจัดการกับ Side Effects ใน Component ของเราได้

"Side Effect" หมายถึงการเปลี่ยนแปลงหรือการกระทำใด ๆ ที่เกิดขึ้นใน Component นอก Scope ของ React เช่นการดึงข้อมูลจาก API, การเปลี่ยน DOM หรือการตั้ง Timer เป็นต้น (เพิ่มเติม : [What is a React Side-Effect?](https://medium.com/@remoteupskill/what-is-a-react-side-effect-a5525129d251#:~:text=A%20React%20side%2Deffect%20occurs,e.g.%20Web%20APIs%20like%20localStorage.))

-   [Synchronizing with Effects - React Docs](https://react.dev/learn/synchronizing-with-effects)
-   [You Might Not Need an Effect - React Docs](https://react.dev/learn/you-might-not-need-an-effect)
-   [Lifecycle of Reactive Effects - React Docs](https://react.dev/learn/lifecycle-of-reactive-effects)
-   [Separating Events from Effects - React Docs](https://react.dev/learn/separating-events-from-effects)
-   [Removing Effect Dependencies - React Docs](https://react.dev/learn/removing-effect-dependencies)
-   [Reusing Logic with Custom Hooks - React Docs](https://react.dev/learn/reusing-logic-with-custom-hooks)
-   [useEffect - React Docs](https://react.dev/reference/react/useEffect)
-   [useRef - React Docs](https://react.dev/reference/react/useRef)

## Further Reading

สุดท้ายนี้่ การจะเขียน React หากใครอยากเขียน React ให้คล่อง แนะนำให้ลองสร้าง Project แล้วลองเขียนดูเลย โดยจะต้องอาศัยความเข้าใจใน JavaScript (และ HTML) ประมาณหนึ่ง หากใครยังไม่แม่นคอนเซปต์สามารถกลับไปอ่านอีกรอบได้ที่ [Roadmap พื้นฐานของ Frontend Developer - Thinc.](https://knowledge.thinc.in.th/roadmap/backend-beginner/)

ทั้งนี้ ข้อดีของ React หนึ่งคือการมี Ecosystem ของเครื่องมือที่ผู้พัฒนาสามารถนำไปใช้ได้อย่างกว้างขวาง หัวข้อดังกล่าวจะพาทุกคนไปรู้จักกับ Library ที่จะทำให้การเขียน React ของเราง่ายยิ่งขึ้น

### Build Tools

-   [ViteJS](https://vitejs.dev/)
-   [Turbo](https://turbo.build/)

### Router (For Client Side Rendering - CSR)

-   [React Router](https://reactrouter.com/en/main)

### State Management

-   [Nanostores](https://github.com/nanostores/nanostores)
-   [Jotai](https://jotai.org/)
-   [Redux](https://redux.js.org/)

### Styling

-   [TailwindCSS](https://tailwindcss.com/)
-   [Bootstrap]()
-   [Styled Components](https://styled-components.com/)
-   [Stitches](https://stitches.dev/)

### Web Frameworks (Server Side Rendering, Static Site Generation)

-   [Next.js (SSR, SSG)](https://nextjs.org/)
-   [Astro (Compatible with React)](https://astro.build/)
-   [Gatsby (SSG)](https://www.gatsbyjs.com/)

### UI Libraries

-   [ShadCN](https://ui.shadcn.com/)
-   [Radix UI](https://www.radix-ui.com/)
-   [MUI](https://mui.com/)

### Testing

-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
-   [Jest](https://jestjs.io/)
-   [Cypress](https://www.cypress.io/)

### `useMemo` and `useCallback`

-   [useMemo - React Docs](https://react.dev/reference/react/useMemo)
-   [useCallback - React Docs](https://react.dev/reference/react/useCallback)
-   [Understanding when to use useMemo](https://maxrozen.com/understanding-when-use-usememo)
-   [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)
