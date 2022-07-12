
const BASE_URL = "https://strangers-things.herokuapp.com/api/"
const COHORT_NAME = "2206-FTB-ET-WEB-FT"

export async function registerPerson(registerUsername, registerPassword){
  try{ 
    console.log(registerUsername, registerPassword)
    const response = await 
        fetch(`${BASE_URL}${COHORT_NAME}/users/register`,
        {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            user: {
              username: registerUsername,
              password: registerPassword
            }
          })
        }
        )
        const result = await response.json();
        return result.data.token
    } catch (error){
      throw error
    }
}

 
export async function getAllPosts() {
        try {
            const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts`)
            const result = await response.json()
            const posts = result.data.posts
            console.log(posts)
            return posts
        }
        catch (error) {
            console.error(error);

       }
}

export async function loginUser(Username, Password){
  try{ 
    console.log(Username, Password)
    const response = await 
        fetch(`${BASE_URL}${COHORT_NAME}/users/login`,
        {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            user: {
              username: Username,
              password: Password
            }
          })
        }
        )
        const result = await response.json();

        return result.data.token
    } catch (error){
      throw error
    }
}
export async function getUserInfo(token){
  try { 
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/users/me`, {

    headers: {
      'Content-Type': "application/JSON",
      'Authorization': `Bearer ${token}`
    }})
    
    const result = await response.json()
    // const token = result.data.token
    return result.data;
  } catch (error) {
    throw error;
  }
}


export async function makeNewPost(title, description, price, location){
  const token = localStorage.getItem("token")
  const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      post: {
        title: title,
        description: description,
        price: price,
        location: location
      }
  })
})
  console.log(response, "response from makeNewPost")
  const result = await response.json()
  return result
  
}


export async function editPost(
  title,
  description,
  price,
  location,
  POST_ID
) {
  const token = localStorage.getItem("token")
  const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts/${POST_ID}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      post: {
        title: title,
        description: description,
        price: price,
        location: location,
        
      }
  })
})
  
  const result = await response.json()
  console.log(result, "edit post possibly")

  return result 
}



export const deletePost = async (POST_ID) => {
  const token = localStorage.getItem('token')
  try {
   const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts/${POST_ID}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
    const result = await response.json()
  return result;
  } catch (error) {
    console.error(error);
  } 
};

export const addMessage = async (POST_ID, content) => {
    const token = localStorage.getItem('token')
    const response = await fetch(`${BASE_URL}${COHORT_NAME}/posts/${POST_ID}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content: content
        },
      }),
    });
    
  
  const result = await response.json()
  console.log({result}, "messages?? possibly")

  return result 
  };