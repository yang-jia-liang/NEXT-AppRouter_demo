'use client'

import React, {useEffect, useState} from "react";
import {Button} from "@nextui-org/react";
import {Autocomplete, AutocompleteItem, Avatar, Card, CardBody} from "@nextui-org/react";
import {getDictionary} from "@/app/[lang]/dictionaries";
import * as server from './page.server'
// import { login } from '@/api/client/common'


export default function Login({ params: { lang } }) {
    const [userId, setUserId] = useState()
    const [isValid, setIsValid] = useState(true)
    const [password, setPassword] = useState('123456')
    const [dict, setDict] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect( () => {
        (async () => {
            const dict = await getDictionary(lang)
            setDict(dict.loginPage)
        })()
    }, [lang])

    const getTranslate = (word) => {
        return dict[word] || word
    }

    const users = [
        {
            id: 1,
            name: dict.Admin,
            role: "Admin",
            avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png",
        },
        {
            id: 2,
            name: dict.Guest,
            role: "Guest",
            avatar: "https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png",
        }
    ];

    const selectUser = (userId) => {
        setUserId(userId)
        setIsValid(true)
    }

    const handleLogin = () => {
        if (!userId) {
            setIsValid(false)
        } else {
            setLoading(true)
            server.login({ id: userId, password }).finally(() => {
                setLoading(false)
            })
        }
    }

  return (
   <div className="flex flex-col w-fit mx-auto mt-60">
       <Card>
           <CardBody>
               <Autocomplete
                   defaultItems={users}
                   variant="bordered"
                   label={getTranslate("User")}
                   isRequired
                   placeholder={getTranslate("Select a user")}
                   labelPlacement="inside"
                   errorMessage={!isValid ? getTranslate("You must select a user") : ""}
                   isInvalid={!isValid}

                   className="max-w-xs"
                   onSelectionChange={selectUser}
               >
                   {users.map(user => (
                       <AutocompleteItem key={user.id} textValue={user.name}>
                           <div className="flex gap-2 items-center">
                               <Avatar alt={user.name} className="flex-shrink-0" size="sm" src={user.avatar} />
                               <div className="flex flex-col">
                                   <span className="text-small">{user.name}</span>
                               </div>
                           </div>
                       </AutocompleteItem>
                   ))}
               </Autocomplete>
               <br/>

               <Autocomplete
                   isReadOnly
                   label={getTranslate("Password")}
                   placeholder={getTranslate("input your password")}
                   defaultSelectedKey="123456"
                   className="max-w-xs"
               >
                   <AutocompleteItem key='123456'>123456</AutocompleteItem>
               </Autocomplete>
               <br/>

               <Button color="primary" isLoading={loading} onClick={handleLogin}>
                   {getTranslate("Login")}
               </Button>
           </CardBody>
       </Card>
   </div>
  );
}
