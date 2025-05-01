export const cosasMenu = [
    {
        title: "Home",
        ruta: "/",
    },
    {
        title: "Settings",
        children: [
            {
                title: "Privacy",
                children: [
                    {
                        title: "Ad privacy",
                        ruta: "/ad-privacy"
                    },
                    {
                        title: "Security",
                        ruta: "/security"
                    }
                ]
            },
            {
                title: "Theme",
                ruta: "/theme"
            }
        ]
    },
    {
        title: "Profile",
        children: [
            {
                title: "Edit",
                ruta: "/edit-profile"
            }
        ]
    },
    {
        title: "Messages",
        ruta: "/messages"
    }
]