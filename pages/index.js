import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainLayoutContainer from '../layout/main-layout-container'
import InputSearch from '../components/home/input-search'

export default function Home() {
  return (
      <MainLayoutContainer>
        <InputSearch />
      </MainLayoutContainer>
  )
}
