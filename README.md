### Spheron website
https://interview-buddy-55a9fb.spheron.app/


## Web3 Interview Prep

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

Overall, Web3 Interview Prep application is a valuable resource for job seekers who are looking to improve their interview skills and gain confidence. By providing a supportive and personalized approach to interview preparation, the application could help users achieve their goals and land their dream jobs.

## How we built it

Web3 Interview Prep application makes use of the following software:

- `Mentle Network` enables Web3 Interview Prep application to be a scalable platform with fast transactions. We deployed our app on the Alfajores Network.

- `Polygon Mumbai Network` enables Book Swap application to be a scalable platform with fast transactions. We deployed our app on the Gnosis Network.

- `Optimism Network` enables our app to be secure and cost-effective. We deployed our app on the Optimism Network

- `Hyperlane` connects our application across OptimismGoerli and Polygon Mumbai Network. This allows users to interact with our application from both either network which reduces the number of hoops users have to jump through just to use our app in multiple chains, get to your app.

It's about abstracting away the complexity of navigating between chains, and letting you and your users simply focus on your app. Here Hyperlane plays a important part as it help the platforms to be function on multiple chains, thus being true to the original purpose of being easy to access. Here, we use QueryAPI provided by hyperlane to call function across both moonbase alpha and goerli testnets.

- `Valist` facilitated the process of distribution of our in a secure way.

- `TableLand` made our work easy with the Ethereum network. This allows us to work with a relational database to store Employment references and metadata for EVM chains like Ethereum. We will definitely keep using complex TableLand functions in the future.

- `XMTP` facilitated the process of communication between employers and employees, especially for important employment documents. XMTP allows our users to request employment letters and documents in and seamless and secure way.

- `Covalent API` was really helpful for users' donations and tips. This facilitated the retrieval of users’ NFTs and smart contract transactions. The Covalent API endpoints to get all NFTs balance and metadata from a wallet address such as images, contracts name, NFTs images, and balances.

* `IPFS NFTStorage` for data storage on IPFS that generates a transaction hash used to create an NFT of a photo.

* `textile/eth-storage`: facilitated a fast way to store metadata for NFTs such: as names, locations, description, images, wallet addresses, and more. It was perfect for our use case to save their needs on the textile storage.

* `NFTPort` smooths the path of the minting and donating process and eliminates the high transaction fees. Our users will not pay anything for donating NFTs or minting.

* `Solidity` for the smart contract.
* `OpenZeppelin ERC721` we use the ERC721 template for faster development of our smart contract.

* `Hardhat` for local blockchain development.

* `React Js, Material-ui, Web3` React Js for the frontend, Material-ui, and Web3 to connect to the blockchain.



## Challenges we ran into
Smart contracts multi chain functionality took us longer.


## Accomplishments that we're proud of
We are proud of the final MVP and how our project went from an idea to a demo


## What we learned
We learned to work with Huddle SDK and how to deploy to the Mentle network and send calls from the the Polybase database to contract.


## What's next for Web3 Interview Prep
Post updates Upon registration, add a point system for users.

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
