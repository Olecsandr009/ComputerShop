export interface IProfile {
	_id: number
	ava: string
	birthday: string
	category: string
	email: string
	firstname: string
	live: string
	name: string
	phone: number
	sex: string
	status: string
}

export interface IUpdateProfile {
	ava: string
	birthday: IBirthday
	category: string
	email: string
	firstname: string
	live: string
	name: string
	phone: number
	sex: string
	status: string
}

interface IBirthday {
	day: string
	month: string
	year: string
}
