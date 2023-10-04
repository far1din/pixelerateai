# What is [pixelerate](https://app.pixelerate.ai)?

Have you ever wanted to train your own custom diffusion models? Whether that be on images of yourself, your cat, dog, house, Edvard Munch styled images etc. you name it. Recent advances in AI has now made it possible! 🤖

[Pixelerate.ai](https://app.pixelerate.ai) is a web application that allows you to train and run exactly these kind of models. This project has been open sourced to the community and this repository contains the code used in production as of `10/03/2023`. If you want to watch the entire tutorial series on how this was built, the series will be posted on my [X account @far1din\_](https://twitter.com/far1din_).

![Screenshot from pixelerate.ai](https://pixelerateai.s3.eu-west-1.amazonaws.com/public-images/github_1.jpeg)

![Screenshot from pixelerate.ai](https://pixelerateai.s3.eu-west-1.amazonaws.com/public-images/github_2.jpeg)

## Technologies used

🖥️ - Frontend/backend >> [NextJS](https://nextjs.org/)\
🔐 - Authentication >> [NextAuth](https://next-auth.js.org/)\
🤖 - Training and running model (API) >> [Replicate](https://replicate.com/)\
📦 - Storage >> [AWS](https://aws.amazon.com/)\
💸 - Payment processing >> [Stripe](https://stripe.com/)

## Run the production version locally

Clone the repository 🖨:

```bash
git clone https://github.com/far1din/pixelerateai.git
```

Then, we need to seup all the variables in the .env file:\
`1. Get the github client ID and the github secret key from your github account`

`2. Create a S3 bucket and set it to be public. Now you will need to specify the chosen region, the bucket name, the access and secret key. You will need to create a admin IAM user in order to get the access and secret key.`

`3. Setup a replicate token. Then you will need to specify the webhook urls. You can do this for free using `[ngrok](https://ngrok.com/).

`4. You will need to setup stripe and add the publishable key, secret key and the webhook secret`

Once you've finished setting up all the keys 👆 you can run the following to install all the dependencies in `package.json`:

```bash
npm i
```

Now, you can finally run the project 🚀

```bash
npm run dev
```

#### _- I will link to the videos once they're public!_ 😃
