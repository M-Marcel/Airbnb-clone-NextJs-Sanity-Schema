export default {
    name: 'person',
    title: 'Person',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Fullname',
            type: 'string',
            description: 'Please use "Firstname and Lastname" format'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100
            }
        },
        {
            name: 'id',
            title: 'ID',
            type: 'number',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        }
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image'
        }
    }
}