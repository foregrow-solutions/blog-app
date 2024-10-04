export type Blog = {
    id: string,
    title: string,
    description: string,
    descriptionContext: string,
    bannerUrl?: string,
    bannerName?: string,
    updatedAt?: string,
}

export type CreateBlogPayload = {
    title: string,
    description: string,
    bannerCid?: string
}

export type CreateBlogCommentPayload = {
    comment: string
}