# BotDiscord_ExperienceManagement
This project is a nodejs implementation of a discord bot. This bot have to give experience when users write in the chat.

## Requirement
- postgresSQL
- nodejs

## Installation
```
npm i
cp config-example.yml config.yml
npm start
```

## Configuration
You have to modify the file `config.yml` to add your database informations and your discord's token

## Personalization
You can modify your level scale and experience gained per messages. You can change your command character too.

## Usage
Write `'!lvl'` or `'your command's character'+'lvl'` to know your level.
