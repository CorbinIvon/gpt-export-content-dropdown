# gpt-export-content-dropdown
This lightweight script introduces an intuitive dropdown menu for conveniently selecting conversations, enhancing your ability to print and view threads.

Ever found yourself scrolling endlessly to locate a specific conversation? Say goodbye to that problem with this simple solution.

![Dropdown Reference](https://github.com/CorbinIvon/gpt-export-content-dropdown/assets/20233488/8a574c99-a783-4529-8fa3-612720086ba6)

This project enriches the user experience of the exported chat.html webpages by integrating a conversation navigation tool. A dropdown menu is added to the webpage, enabling users to effortlessly switch between conversations. Upon selecting a conversation from the dropdown, only its related content is displayed, neatly hiding all others.

## Usage
1. Insert the following line at an appropriate location in your chat.html file:
    ```html
    <script src="better_navigation.js"></script>
    ```
    - Please make sure that the better_navigation.js script file is located in the same directory as your chat.html file.
    - It is suggested to place this line after the closing </style> tag and before the closing </head> tag for better consistency.

2. Save / copy the content from better_navigation.js into a file named better_navigation.js, and place it in the same directory as your chat.html file.

3. Once the page is loaded, a dropdown menu will be readily available on the page, allowing users to choose among different conversations. The content of the selected conversation will be shown, while the rest stay hidden. Simply select your desired conversation.

## Acknowledgments
- [GPT-3.5](https://openai.com/blog/openai-api/) for assisting in content generation.
- [CoPilot](https://copilot.github.com/) for aiding in content creation.
- [OpenAI](https://openai.com/) for developing and supplying the tools that made the rapid development of this functionality possible.
