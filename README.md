![image](images/banner.png)

# <img src="/images/reply_chef_icon.png" width="60"> ReplyChef

## Meet the Team

<img src="/images/cisco.png" width="175" /> | <img src="/images/jackson.png" width="175" /> | <img src="/images/ryan.png" width="175" /> | <img src="images/ethan.png" width="175" />
-- | -- | -- | --
Francisco | Jackson | Ryan | Ethan

## Inspiration

As we move further into a digital age interacting with your audience is incerasingly important. Especially if you're any form of content creator or onine business. In almsot every medium of online creativity there is a space for people to leave comments. These comments can grow quickly leaving the creator in a spot that makes it difficult to engage. But what if you could change that? What if you coud use machine learning and natrual language processing to serve you comments in your feed or forums that are relevent to the content, or questions people have, or group them by sentiment. Enter, ReplyChef.

## How we built it

## Technologies Used
- Python 3, NumPy, Pandas
- Google Nautral Language API, Natural Language Toolkit
- Google Cloud Platform, Firebase
- React, Javascript

## Challenges faced
- Google Cloud's NLP API only classifies strings with less than 20 words. We solved this challenge by devloping our own classification model using NLTK in order to classify the non-compliant data.
- YouTube API only allows comments to be pulled after verification with OAuth. To get around this, we used a webscraping bot to pull thousands of comments for training the model.

## Project Features
- Classification of comments by category.
- Creator replies.

## Future Implementations
- Integrate OAuth.
- Allow users to select a video for classification.
- Send comment replies to YouTube API.
