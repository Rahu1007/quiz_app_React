# quiz_app

### setup instruction
1.open cdm
```
npm create vite@latest
```
2.select your file name and may more thing 
```
 create-vite

|
o  Project name:
|  quiz_app
|
o  Select a framework:
|  React
|
o  Select a variant:
|  JavaScript
```
3.Move to the directory
```
cd quiz_app
```
3.install dependencies
```
npm i
```
4.run server 
```
npm run dev
# then make github repo without on readme 
1.clone the project
```
https://github.com/Rahu1007/quiz_app_React.git

```
```
git add -A

# Create your first commit (this will actually create the branch)
git commit -m "Initial commit"

# Make sure the branch is named main
git branch -M main

# Push to GitHub
git push -u origin main
```



# install of tailwindcss
1.install process
```
npm install -D tailwindcss@3
npx tailwindcss init
```

2.Configure your template paths
Add the paths to all of your template files in your tailwind.config.js file.
```
  /** @type {import('tailwindcss').Config} */
 export default {
>   content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
```

3.Add the Tailwind directives to your CSS
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```