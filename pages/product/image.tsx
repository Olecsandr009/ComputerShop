import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Image = () => {
	const router = useRouter()

	const [url, setUrl] = useState()

	function ChangeHandler(e: any) {
		const files = Array.from(e.target.files)

		files.forEach(file => {
			const reader = new FileReader()

			reader.onload = ev => {
				ev.target ? setUrl(ev.target.result) : undefined

				console.log(ev.target?.result)
			}

			reader.readAsDataURL(file)
		})
	}

	useEffect(() => {
		console.log('ddd')
	}, [url])

	return (
		<div>
			<input onChange={ChangeHandler} type='file' />

			{url ? <img src={url} /> : <div>Not image</div>}
		</div>
	)
}

export default Image
