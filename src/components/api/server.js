let token = '0d764c8fcf8c994c9eed16423dcb25d7e329ad7d8f2f523f';

export const api_routes = {
    get: async () => {
        const response = await fetch(`https://final-project-jdchan.herokuapp.com/api/recipes`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },
    read: async (id) => {
        const response = await fetch(`https://final-project-jdchan.herokuapp.com/api/recipes/${id}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS'
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch recipe from server')
        }

        return await response.json()
        
    },
    create: async(data = {}) => {
        const response = await fetch(`https://final-project-jdchan.herokuapp.com/api/recipes`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                // 'Origin': 'https://final-project-jdchan.herokuapp.com'
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
	},
    update: async (id, data = {}) => {
        const response = await fetch(`https://final-project-jdchan.herokuapp.com/api/recipes/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },
    delete: async(id) => {
        const response = await fetch(`https://final-project-jdchan.herokuapp.com/api/recipes/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
        })
    }
}