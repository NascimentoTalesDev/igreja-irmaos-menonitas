import Layout from "@/components/Layout";
import Title from "@/components/Title";
import BackIconLink from "@/components/BackIconLink";
import Card from "@/components/Card";
import Button from "@/components/Button";
import NewDocument from "@/components/NewDocument";
import SearchContainer from "@/components/SearchContainer";
import PlusIcon from "@/components/icons/PlusIcon";
import { useContext, useEffect, useState } from "react";
import { ModalContext } from "@/providers/ModalProvider";
import CardDocument from "../../../components/CardDocument";
import checkKey from '@/lib/checkKey'
import CardError from "../../../components/CardError";
import { useRouter } from "next/router";
import axios from "axios";
import { api, versionApi } from "@/lib/configApi";
import TitleH2 from "../../../components/TitleH2";

const SearchPage = () => {
  const { toggleModal, setDataModal } = useContext(ModalContext)
  const { query } = useRouter()
  const router = useRouter()

  const [search, setSearch] = useState('')
  const [documents, setDocuments] = useState('')
  const [message, setMessage] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    const getItems = async () => {
      setIsSearching(true)
      await axios.get(`${api}/${versionApi}/documents/${query.search}`).then(response => {
        if (!response?.data?.length) {
          setMessage("Nemhum documento encontrado")
          setDocuments([])
        } else {
          setDocuments(response?.data)
        }
      })
      setIsSearching(false)
    }
    getItems()
  }, [query.search])

  function searchItem() {
    router.push(`/dashboard/documents/${search}`)
  }

  return (
    <Layout onKeyDown={(ev) => checkKey(ev, searchItem)}>

      <div className="flex justify-center relative mb-[14px]">
        <BackIconLink className="absolute left-0" path="/dashboard/documents" />
        <TitleH2 text={`Busca por: ${query.search}`} className="mx-[30px]" />
      </div>
      
      <SearchContainer value={search} onchange={(ev) => setSearch(ev.target.value)} onClick={searchItem} placeholder="Está procurando algo específico?" />
      {documents.length > 0 ?
        (
          <>
            <p className="text-[10px] pt-[5px]">Encontrados: <span className="font-bold">{documents.length}</span></p>
            <Card className={"mt-[30px]"}>
              <CardDocument documents={documents} />
            </Card>                    </>
        )
        :
        (
          <CardError message={message} />
        )
      }    
    </Layout>
  );
}

export default SearchPage;
