## Web3 Interview Buddy

A peer-to-peer platform for practicing interviews for DS&A, Behavioral, System Design, Frontend, Practice with a Friend, and more. This is a powerful tool for job seekers and anyone preparing for interviews.

### How does it work?

Users book interviews with other engineers based on their availability, practicing needs, and programming language preferences.

Interviews are live, 1-on-1 stream live video sessions on our website over a code editor.

Each practice session is bi-directional: Every user acts as both interviewee and interviewer. This gives an opportunity to observer others and learn about the “Do’s” and “Don’ts” in an interview.

Benefits of the Interview Buddy App:

- Users create a profile with their technical skills and areas of interest.
- Users schedule a time to conduct a mock interview.
- Users take turns being the interviewer and interviewee. The interviewer would ask technical questions related to the interviewee's area of expertise, and the interviewee would have a set amount of time to answer the questions.
- Users provide feedback to each other, highlighting areas of strength and areas that need improvement.
- Users can track their progress over time, indicating areas where the user has improved and areas that still need work.

It is a community of software engineers who come together to prepare for their upcoming coding interviews. It facilitates the exchange of technical knowledge and provides valuable feedback to improve interview skills.

Overall, an Interview Buddy application is a valuable resource for job seekers who are looking to improve their interview skills and gain confidence. By providing a supportive and personalized approach to interview preparation, the application could help users achieve their goals and land their dream jobs.

## Challenges I ran into

We struggled, learned, and enjoy working with the Hurdle SDK. The SDK has great methods that made easy the integration and the end product came up really nicely together, we loved it.

### Brief description on how your project fits into Build using LightHouse SDK track

We are using lighthouse to save all the interview details and files need it for sessions

We are using Lighthouse SDK in this powerful app to build video interviews and a StackOverflow feature where users ask questions and get video live answers. Lighthouse SDK stores all user details, session details, interview materials, and upcoming and past interviews.

## Brief description on how your project fits into Social Platform track

We deployed to HyperSpace our contract is `0x36Df2Cb62B988263143e6aEA32cbc7844EAEE87C`
https://beryx.zondax.ch/v1/search/fil/hyperspace/address/f410fg3psznrltcbggfb6nlvdfs6hqrhk52d47ngovpy

We used the FVM to deploy our smart contract and the LightHouse to save all the posts, & user metrics, and all files for interview sessions. Huddle01 SDK helps us to live stream every live session.

Interview Buddy is a video platform that fits into the Social Platform track by providing a platform for social interaction through video content. Users can create sessions, share knowledge and consume video content, interact with others through feedback and reactions, and build a community around shared interests and experiences.
The app can also incorporate social features such as user profiles, and a leaderboard that rewards the best interviewers.
Overall, this video app can help foster social interactions and build a sense of community among its users, which aligns with the goals of the Social Platform track.

## Huddle

1. get API
   https://huddle01.com/docs/api-keys

2. create room using api
   https://huddle01.com/docs/apis/create-room

curl -X POST \
'https://iriko.testing.huddle01.com/api/v1/create-room' \
--header 'Accept: _/_' \
--header 'x-api-key: VwTZ4AGTxme9snANex9tep3NwvVMGfYd' \
--header 'Content-Type: application/json' \
--data-raw '{
"title" : "Huddle01-Test"
}'
copy paste on terminal copy


# Team info

- Teleg: @byBetoNY
- disc: Izmar#4265

## flow

1. get project id
2. create room id using api
3. fetch resources(mic&vid)

# Demo

creator: AD66
peer: A85

## Materials links

https://excalidraw.com/#room=b596c8b91951e12f0ae8,sPlRichliOMl5j_zaEwvLA
https://github.com/marcialarturo/interview-buddy-video-jam
https://youtu.be/S7EMlppkJ00
