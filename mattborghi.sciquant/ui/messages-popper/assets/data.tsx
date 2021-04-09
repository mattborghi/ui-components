import React from "react";

import {
    ListItemAvatar,
    Avatar,
} from "@material-ui/core";

export const data = [
    {
        image: (
            <ListItemAvatar>
                <Avatar>PM</Avatar>
            </ListItemAvatar>
        ),
        from: "Pablo Macri",
        message: "Have you started with the BasketAsian model?",
    },
    {
        image: (
            <ListItemAvatar>
                <Avatar>GR</Avatar>
            </ListItemAvatar>
        ),
        from: "Gaston Romeo",
        message: "Please, send me the BasketAsian TestPlan ASAP.",
    },
    {
        image: (
            <ListItemAvatar>
                <Avatar>MF</Avatar>
            </ListItemAvatar>
        ),
        from: "Matias Febles",
        message: "Pero qué pasa!?",
    },
    {
        image: (
            <ListItemAvatar>
                <Avatar>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Blank_Face.jpg/450px-Blank_Face.jpg"
                        width={42}
                        height={42}
                    />
                </Avatar>
            </ListItemAvatar>
        ),
        from: "Ramiro Vignolo",
        message: "Windows is great!",
    },
    {
        image: (
            <ListItemAvatar>
                <Avatar>MK</Avatar>
            </ListItemAvatar>
        ),
        from: "Martin Kuperman",
        message: "I realized Google Pixel is better than Iphone.",
    },
    {
        image: (
            <ListItemAvatar>
                <Avatar>RM</Avatar>
            </ListItemAvatar>
        ),
        from: "Ramiro Mosteirin",
        message: "Vamos a Tafari?",
    },
];
