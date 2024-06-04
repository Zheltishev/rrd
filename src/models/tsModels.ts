import { ReactNode } from "react"

export interface IPost {
    body: string,
    id: number,
    title: string,
    userId: number
}

export interface IProps {
    children?: ReactNode
}