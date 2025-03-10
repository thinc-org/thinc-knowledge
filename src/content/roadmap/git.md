---
title: 'Git Basics'
description: 'เรียนรู้ทักษะพื้นฐานในกาใช้ Git ในการทำ version control'
level: 'beginner'
---

# Git Basics

บทความนี้จะพาทุกคนมารู้จักกับ basics ของการใช้งานโปรแกรม Git กัน

Git เป็นโปรแกรม version control ที่นับได้ว่าใช้กันอย่างแพร่หลายที่่สุดในสำหรับ software development ที่ช่วยติดตามการเปลี่ยนแปลงของโค้ดระหว่างการพัฒนาโปรแกรมของเรา ซึ่งสำคัญอย่างมากในการจัดการ codebase ร่วมกันทีมที่มีหลายคนทำงานในโปรเจกต์เดียวกัน

# Learning Resources

## Video Tutorials

-   [Git in 100 seconds](https://www.youtube.com/watch?v=hwP7WQkmECE)
-   [Git Tutorial For Dummies](https://www.youtube.com/watch?v=mJ-qvsxPHpY)
-   [Learn Git - The Full Course [Freecodecamp]](https://www.youtube.com/watch?v=zTjRZNkhiEU)

## Web Content

-   [Git พื้นฐานสุด ๆ จบในหน้าเดียว](https://www.borntodev.com/2020/03/30/git-%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%90%E0%B8%B2%E0%B8%99%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%86/)
-   [Git Handbook](https://guides.github.com/introduction/git-handbook/)
-   [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

## Interactive Games

-   [Learn Git Branching](https://learngitbranching.js.org/)
-   [Ohmygit (Git Game)](https://ohmygit.org/)
-   [Githug - Command Line Git Game](https://github.com/Gazler/githug)

## Long Content

-   [GitHub: Git Basics](https://docs.github.com/en/get-started/git-basics)
-   [Pro Git book](https://git-scm.com/book/en/v2)

# Resources อื่น ๆ

## การเขียน Commit Message ที่ดี

-   [Conventional Commits - A specification for adding human and machine readable meaning to commit messages](https://www.conventionalcommits.org/en/v1.0.0/)
-   [How to write better Git commit messaages](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/)
-   [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)

# Basics

การใช้งาน Git มีคำสั่งเบื้องต้นประมาณนี้ แนะนำให้อ่าน resources ที่เราได้แปะไว้เพื่อทำความเข้าใจแต่ละคำสั่งด้วย

## Set up

สามารถติดตั้ง Git ได้จาก [git-scm.com](https://git-scm.com/)

## เกี่ยวกับการสร้าง repository

-   `git init` สร้าง repository ใหม่ เพื่อให้ Git ติดตามการเปลี่ยนแปลงของไฟล์ในโฟลเดอร์ปัจจุบัน
-   `git clone` คัดลอก repository จาก remote repository เช่นใน GitHub (repository ที่ถูก host จาก network หรือ internet)

## การอัปเดตการเปลี่ยนแปลง และตรวจสอบสถานะ

-   `git add` เพิ่มไฟล์เข้า staging (เพื่อบอกว่าเรากำลังเตรียมจะ commit ไฟล์เหล่านี้)
-   `git commit` การ commit บันทึกการเปลี่ยนแปลงที่อยู่ใน staging area
-   `git log` ดูประวัติการ commit
-   `git status` ตรวจสอบสถานะของไฟล์ในโฟลเดอร์ปัจจุบัน

## branching

การสร้าง branch คือการสร้าง multiverse ใหม่ของโปรเจกต์ของเรา ที่เราสามารถทำการเปลี่ยนแปลงโค้ดได้โดยไม่มีผลต่อ branch อื่น ๆ ใน repository นั้น

-   `git branch` จัดการหรือสร้าง branch ของ repository
-   `git checkout` สลับไปที่ branch ที่เราต้องการ
-   `git rebase` รวม branch โดยการเลือก commit ที่จะรวม (เพื่อให้ประวัติการ commit ของ branch ที่เรา merge มีลำดับที่เรียงกัน)
-   `git merge` รวม branch หนึ่ง กับ branch ปัจจุบัน

## อัปเดตการเปลี่ยนแปลงที่ remote repository

remote repository คือ repository ที่ถูก host จาก network หรือ internet เช่นใน [GitHub](https://github.com/), [GitLab](https://about.gitlab.com/), [Bitbucket](https://bitbucket.org/product/)

-   `git push` ส่งการ commit ไปยัง remote repository
-   `git pull` ดึงการ commit จาก remote repository
-   `git fetch` ดึงการ commit จาก remote repository แต่ยังไม่ merge กับ branch ปัจจุบัน
-   `git remote` จัดการ remote repository ทั้งหมดที่เชื่อมกับ local repository (ส่วนใหญ่จะตั้งชื่อว่า 'origin')

นอกจากนี้ ยังมีคำสั่งอื่น ๆ อีกเยอะมากที่มีประโยชน์กับ experience ของเราในฐานะ developer สามารถเข้าไปอ่าน documentation ของ Git ได้ที่ [git-scm.com/doc](https://git-scm.com/doc) เลย

# GitHub Basics

[GitHub](https://github.com) เป็น platform ที่ให้บริการ hosting สำหรับ Git repository ที่เราสามารถใช้งานได้ฟรี และมี feature อื่น ๆ ที่ช่วยในการจัดการโปรเจกต์ของเราอีกเยอะ

## การใช้งาน GitHub

สมัครสมาชิก GitHub ได้ที่ [github.com](https://github.com) จากนั้นให้สร้าง repository ใหม่ โดยกดปุ่ม 'New' ที่หน้าหลักของ GitHub

-   [Hello World - GitHub](https://docs.github.com/en/get-started/start-your-journey/hello-world)

## การใช้งาน Pull Request

Pull Request เป็น feature ที่ช่วยให้เราสามารถร้องขอให้เจ้าของ repository รวมการเปลี่ยนแปลงใน branch หนึ่ง เข้าไปที่อีก branch หนึ่ง

-   [Beginner’s guide to GitHub: Creating a pull request](https://github.blog/developer-skills/github/beginners-guide-to-github-creating-a-pull-request/)
-   [Creating a Pull Request - GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

## การใช้งาน Issues

Issues เป็น feature ที่ช่วยให้เราสามารถสร้าง task หรือ bug report ใน repository ของเรา

-   [Quickstart for GitHub Issues - Follow this brief interactive guide to learn about GitHub Issues.](https://docs.github.com/en/issues/tracking-your-work-with-issues/configuring-issues/quickstart)
