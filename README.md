# Dictionary Next app
網址：https://dictionary-u88803494.vercel.app/

## 簡介
功能如下：
- 首頁：查詢字詞
- 按照詞性分類以方便學習
- 支援手機瀏覽
- 電腦瀏覽
- Break point 設置在 640px

### 開發面功能
- Commit 時，使用 Prettier 搭配 ESlint 自動檢查

## 啟發點
在經過學習技術的洗禮後，我知道原來人們對於字的定義的理解非常重要，這會有助於溝通以及理解。
後來我也常常會針對有所誤解或理解不夠的字去做查詢，但目前在傳統的字典上不是很夠用，因為除了查詢之外，還需要做一些動作幫助理解，所以為了效率，就決定自己寫一個字典的網站。

也因此，就會需要支援手機瀏覽查詢，因此做出了這個字典網站，也是讓我自己學習一下自己想學的技術。

## 使用技術
- [Next](https://nextjs.org/)
- Hook component
- [TypeScript](https://www.typescriptlang.org/)
- Redux
- [React-toolkit](https://redux-toolkit.js.org/)
- [Redux-thunk(Redux-toolkit 內建)](https://redux-toolkit.js.org/api/createAsyncThunk)
- [TailwindCSS](https://tailwindcss.com/)
- RWD
- Vercel 部署

## Packages
- [axios](https://github.com/axios/axios)
- ESlint
- Prettier
- Husky
- lint-staged

## 頁面簡介

### 支援手機瀏覽
![mobile](https://filedn.eu/lE3dlSw1QGLmQQNoPyEqQVR/Image/mobile-use.png)

### 電腦瀏覽 1080p
![PC](https://filedn.eu/lE3dlSw1QGLmQQNoPyEqQVR/Image/pc-use.png)

### 搜尋功能
![Search](https://filedn.eu/lE3dlSw1QGLmQQNoPyEqQVR/Image/search_feature.gif)


## 畫面效果
### Dropdown 動畫展示
![Dropdown](https://filedn.eu/lE3dlSw1QGLmQQNoPyEqQVR/Image/search_feature.gif)

### Dropdown 自動收起
在螢幕寬度改變跟捲動的時候自動收起 Dropdown

![Auto closing](https://filedn.eu/lE3dlSw1QGLmQQNoPyEqQVR/Image/reset-navbar-on-scroll-or-resize.gif)
