import Image from 'next/image'
import styles from './ShoeGrid.module.css'
import data from '~/data'

type Props = {}

export default function ShoeGrid(props: Props) {
	return (
		<ul className={styles.shoeGrid}>
			{data.map((shoe) => (
				<li key={shoe.name}>
					<Shoe {...shoe} />
				</li>
			))}
		</ul>
	)
}

type ShoeProps = {
	slug: string
	name: string
	imageSrc: string
	price: number
	salePrice: number | null
	releaseDate: number
	numOfColors: number
}

function Shoe(props: ShoeProps) {
	const isNew = Date.now() - props.releaseDate < 1000 * 60 * 60 * 24 * 60
	const hasTags = isNew || props.salePrice != null
	return (
		<div className={styles.shoe}>
			<div className={styles.imageWrapper}>
				<Image
					src={props.imageSrc}
					width={340}
					height={240}
					className={styles.img}
					alt={props.name}
					sizes='
						(max-width: 768px) 100vw,
						(max-width: 1200px) 50vw,
						33vw
					'
				/>
			</div>
			<div className={styles.descLine}>
				<h3 className={styles.name}>{props.name}</h3>
				{hasTags && (
					<div className={styles.tags}>
						{props.salePrice && <div className={styles.saleTag}>Sale</div>}
						{isNew && <div className={styles.newTag}>Just released!</div>}
					</div>
				)}
				<span className={styles.price}>
					{props.salePrice ? (
						<s>{currency(props.price)}</s>
					) : (
						currency(props.price)
					)}
				</span>
			</div>
			<div className={styles.descLine}>
				<span className={styles.colors}>
					{props.numOfColors > 1
						? `${props.numOfColors} Colors`
						: `${props.numOfColors} Color`}
				</span>
				{props.salePrice != null ? (
					<span className={styles.salePrice}>{currency(props.salePrice)}</span>
				) : null}
			</div>
		</div>
	)
}

function currency(price: number) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
	}).format(price / 100)
}
