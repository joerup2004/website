import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')
const appsDirectory = path.join(process.cwd(), 'posts/apps')
const scienceDirectory = path.join(process.cwd(), 'posts/science')

const appsCategory = 'apps';
const scienceCategory = 'science';

// Gets all articles data and sorts them by most recent date
export function getSortedPostsData() {
  // Get file names under each categories directory
  const appsFileNames = fs.readdirSync(appsDirectory)
  const scienceFileNames = fs.readdirSync(scienceDirectory)

  // Get data from Apps files
  const appsFilesData = appsFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    
    // Read markdown file as string
    const fullPath = path.join(appsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Set the category
    const category = 'apps'

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })

  // Get data from Science files
  const scienceFilesData = scienceFileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')
    
    // Read markdown file as string
    const fullPath = path.join(scienceDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Set the category
    const category = 'science'

    // Combine the data with the id
    return {
      id,
      category,
      ...matterResult.data
    }
  })

  // Concatenate each articles data in one array
  const allPostsData = appsFilesData.concat(scienceFilesData);
  
  // Sort articles by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

// Get all the post IDs
export function getAllPostIds() {
  // Get file names under each categories directory
  const appsFileNames = fs.readdirSync(appsDirectory)
  const scienceFileNames = fs.readdirSync(scienceDirectory)

  // Holds all [category] names 
  let categoryNames = [];

  // Loop through each xxxFileNames array. 
  // Add relevant category name to categoryNames array
  appsFileNames.forEach(function(appsFileName) {
    categoryNames.push(appsCategory);
  })
  scienceFileNames.forEach(function(scienceFileName) {
    categoryNames.push(scienceCategory);
  })
  
  // Concatenate each articles name in one array (id)
  const fileNames = appsFileNames.concat(scienceFileNames);

  // Combine categoryNames & fileNames arrays
  const postParams = categoryNames.map(function(e,i){return{categoryName:e,id:fileNames[i]}});
  
  // Loop through postParams. Output variable params
  return postParams.map(postParam => {
    return {
      params: {
        category: postParam.categoryName,
        id: postParam.id.replace(/\.md$/, '')
      }
    }
  })

}

// Get relevant post data
export async function getPostData(category, id) {
    // Set the relevant /posts file path using category and id in the query params    
    const fullPath = path.join(postsDirectory, `${category}`, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    console.log(matterResult);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
    
}


// import fs from 'fs'
// import path from 'path'
// import matter from 'gray-matter'
// import remark from 'remark'
// import html from 'remark-html'

// const postsDirectory = path.join(process.cwd(), 'posts')

// export function getSortedPostsData() {
//   // Get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory)
//   const allPostsData = fileNames.map(fileName => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '')

//     // Read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents)

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data
//     }
//   })
  
//   // Sort posts by date
//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1
//     } else {
//       return -1
//     }
//   })
// }

// export function getAllPostIds() {
//   const fileNames = fs.readdirSync(postsDirectory)

//   return fileNames.map(fileName => {
//     return {
//       params: {
//         id: fileName.replace(/\.md$/, '')
//       }
//     }
//   })
// }

// export async function getPostData(id) {
//   const fullPath = path.join(postsDirectory, `${id}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf8')

//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents)

//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content)
//   const contentHtml = processedContent.toString()

//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...matterResult.data
//   }
// }