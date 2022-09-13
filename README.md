
# Brainflix READ.ME

BrainFlix is a full stack application which mimics functions of youtube, Whent the user comes to the main page a video is loaded as well as its comments. In addition to a list of other vidoes which can be watched. When another video is clicked, the comments, likes and all other details about that video are updated. Users are also able to post new vidoes to the database with details such as name and title in addition to a picture of the video. 

# BackEnd Github Repository

https://github.com/PranavPrashar/pranav-prashar-brainflix-api





## Deployment Frontend

To deploy this project run


```bash
  cd into pranav-prashar-brainflix
```

```bash
  npm install
```

```bash
  npm start
```



## Features

- Users can view videos that they might want to view
- When a user clicks on a video in the Next Videos section the video which is playing and the clicked video are switched with details such as the Views, Title, views, and comments to name a least are updated
- Users can also post their videos to the site, this can be done by clicking the upload button at the top of the page. Which redirects them to /upload in which they can post video with details such as comments, title and a picture of the video which is used as the display 
- The website can be used across multiple view points rangeing from Desktop down to mobile, the UI will scale depending on the users view port size allowing for responsive design and interface


## Tech Stack

**Client:** React, Scss

**Server:** Node, Express 




## Screenshots
#### Desktop Home Page:
![Desktop Home Page](https://i.imgur.com/phUAZOm.png)
#### User selected new Video
###### This results in original video being moved to next video and selected video to main window. Information such as the comments, video, likes, views and other video details are updated. 
![User selected new Video](https://i.imgur.com/wfQTZjX.png)


#### Mobile View Main Page
![Mobile View Main Page](https://i.imgur.com/0yW3tNR.png)
#### Desktop Upload Page
![Mobile View Main Page](https://i.imgur.com/uyh14jZ.png)







