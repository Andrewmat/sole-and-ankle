import { useState } from 'react'
import Head from 'next/head'
import MainLayout from '~/layouts/main'
import SideMenu from './SideMenu'
import Spacer from '~/ui/Spacer'
import Select from '~/ui/Select'
import ShoeGrid from './ShoeGrid'
import styles from './index.module.css'
import { Breadcrumb, Crumb } from '~/ui/Breadcrumb'

export default function Home() {
	const [sortId, setSortId] = useState<string>('newest')

	return (
		<>
			<Head>
				<title key='title'>Shoe & Ankle | Wear foot, footwear</title>
			</Head>

			<MainLayout>
				<Spacer axis='vertical' size={64} />
				<div className={styles.mainWrapper}>
					<div className={styles.content}>
						<header className={styles.header}>
							<h2 className={styles.title}>Running</h2>
							<Select
								label='Sort'
								value={sortId}
								onChange={(ev) => setSortId(ev.target.value)}
							>
								<option value='newest'>Newest Releases</option>
								<option value='price'>Price</option>
							</Select>
						</header>
						<Spacer axis='vertical' size={34} />
						<ShoeGrid />
						<Spacer axis='vertical' size={64} />
					</div>

					<div className={styles.side}>
						<Breadcrumb className={styles.breadcrumb}>
							<Crumb href='/'>Home</Crumb>
							<Crumb href='/sale'>Sale</Crumb>
							<Crumb href='/sale/shoes'>Shoes</Crumb>
						</Breadcrumb>
						<Spacer axis='vertical' size={36} />
						<SideMenu />
					</div>
				</div>
			</MainLayout>
		</>
	)
}
