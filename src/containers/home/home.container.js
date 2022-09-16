
import { useRouter } from 'next/router'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import ModalHome from './modal-add'
import {
    Alerts,
    ModalDel,
    ButtonBasic
} from '../../components'
import {
    HomeAPI
} from '../../api'
import {
    Images
} from '../../assets'

import {
    ImgLogo,
    TextHome,
    TitleHome,
    StyleText,
    ImgContent,
    ProductList,
    ContentLine,
    TextContent,
    DescContent,
    ContentSecond,
    ContainerText,
    ContainerLine,
    ContainerImgLeft,
    ContainerContent,
    ContainerImgLarge,
    ContainerTextHome,
    ContainerTextRight,
    ContainerProductList,
    ContainerButtonTExtHome
} from './home.styled.container'
import { useEffect, useState } from 'react'

const Home = () => {
    const router = useRouter()
    const [content, setContent] = useState([])
    const [showModal, setShowModal] = useState(false)
    const [userInfo, setUserInfo] = useState(null)
    const [dataItem, setDataItem] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [isDetail, setIsDetail] = useState(false)
    const [dataDel, setDataDel] = useState({})
    const [toggleDelete, setToggleDelete] = useState(false)
    const [toggleLogout, setToggleLogout] = useState(false)
    const [showAlert, setAlert] = useState({ visible: false, msg: '', success: false, type: '' })

    const product1 =[
        {
            title: 'Test case management',
            text: 'Test case management'
        },
        {
            title: 'Exploratory testing',
            text: 'Exploratory testing'
        },
        {
            title: 'Test automation',
            text: 'Test automation'
        },
        {
            title: 'Reporting & metrics',
            text: 'Reporting & metrics'
        }
    ]

    const product2 =[
        {
            title: 'Projects & milestones',
            text: 'Projects & milestones'
        },
        {
            title: 'QA team productivity',
            text: 'QA team productivity'
        },
        {
            title: 'CI pipelines & DevOps',
            text: 'CI pipelines & DevOps'
        },
        {
            title: 'IT enterprise cloud',
            text: 'IT enterprise cloud'
        }
    ]

    const deleteModal = (id) => {
        return (

        <div>
          <ModalDel

            id='m_actv_delete_mdl'
            isOpen={toggleDelete}
            toggleDialog={() => setToggleDelete(!toggleDelete)}
            submitDelete={() => deleteData(id)}
            deleteTitle='Delete Fiture'
            deleteText='Are you sure to delete the fiture ?'
          />
        </div>
        )
    }

    const logoutModal = () => {
        return (

        <div>
          <ModalDel
            id='m_actv_logout_mdl'
            isOpen={toggleLogout}
            toggleDialog={() => setToggleLogout(!toggleLogout)}
            submitDelete={() => _logout()}
            deleteTitle='Log Out'
            deleteText='Are you sure to log out ?'
          />
        </div>
        )
    }

    const deleteData = async (id) => {
        try {
          const response = await HomeAPI.DeleteFiture(id)
          if (response) {
            setAlert({
              msg: 'Delete fiture has been successful',
              success: true,
              visible: true,
              type: 'delete',
            })
            _getComment()
            setToggleDelete(false)
          } else {
            setAlert({ msg: 'Cannot fiture data', success: false, visible: true, type: 'delete' })
          }
        } catch (err) {
          return err
        }
    }

    const _logout = () => {
        localStorage.clear()
        setUserInfo(null)
        setAlert({
            msg: 'Log out has been successful',
            success: true,
            visible: true,
            type: 'delete',
          })
          _getComment()
          setToggleLogout(false)
    }

    const _closeModal = () => {
        setIsEdit(false)
        setIsDetail(false)
        setShowModal(false)
    }
    
    const _getComment = async () => {
        try {
            const response = await HomeAPI.GetComments()
            if(response.status == 200) {
                setContent(response.data.filter(e=> e.userId == 1))
            }
        } catch (err) {
            return err
        }
    }

    useEffect(()=> {
        setUserInfo(localStorage.getItem('user_info')
        ? JSON.parse(localStorage.getItem('user_info'))
        : null)
        _getComment()
    },[])

    return (
        <div>
            <div>
                <ButtonBasic
                    style={{ 
                        float: 'right',
                        marginRight: '5vh'
                    }}
                    bg={'#2bbb65'}
                    outline={'#2bbb65'}
                    onClick={()=> {
                        if(userInfo == null) { 
                            router.push('/login')
                        } else {
                            setToggleLogout(true)
                        }
                    } }
                    label={userInfo == null ? 'Log In' : 'Log Out'}
                />
                <TitleHome style={{ marginBottom: '1vh', marginLeft: '125px'}}>#1 Unified <StyleText>Modern</StyleText> Test</TitleHome>
                <TitleHome style={{ marginTop: '1vh'}}>Management Software</TitleHome>
                <ContainerTextHome>
                    <TextHome>{'Manage all your test cases, sessions & automation in Testmo. Powerful unified test management: lightning fast UI, rich reports & integrations. Works with Jira, GitHub, GitLab & many more.'}</TextHome>
                </ContainerTextHome>
                <ContainerButtonTExtHome>
                    <div>
                        <ButtonBasic
                            onClick={()=> {
                                if(userInfo == null){
                                    setAlert({
                                        msg: 'Login first to add fiture',
                                        success: false,
                                        visible: true,
                                        type: 'login',
                                      })
                                } else {
                                    setShowModal(true)
                                }
                            }}
                            outline={'black'}
                            label={'Add Fiture'}
                        />
                    </div>
                </ContainerButtonTExtHome>
                <ContainerImgLarge>
                    <img src={Images.sample1}/>
                </ContainerImgLarge>
                <ContainerLine>
                    <ContentLine>
                        <p>Works with all your existing tools, including:</p>
                        <div>
                            <ImgLogo src={Images.jira}/>
                            <img style={{width: 'width: 6vh'}} src={Images.github}/>

                        </div>
                    </ContentLine>
                </ContainerLine>
            </div>
            <ContentSecond>
                {
                    content.length > 0 ? content.map((e,i)=> {
                        if(i % 2 == !0) {
                            return (
                                <ContainerContent key={i}>
                                    <ContainerText>
                                        <DescContent>{e.id}. {e.title}</DescContent>
                                        <TextContent>{e.body}</TextContent>
                                        <div>
                                            {userInfo !== null && (<>
                                                <ButtonBasic
                                                    style={{
                                                        color: 'white',
                                                        marginRight: '10px',
                                                        backgroundColor: 'green'
                                                    }}
                                                    onClick={()=> {
                                                        setIsEdit(true)
                                                        setDataItem(e)
                                                        setShowModal(true)
                                                    }}
                                                    outline={'green'}
                                                    label={'Edit'}
                                                />
                                                <ButtonBasic
                                                    style={{
                                                        color: 'white',
                                                        marginRight: '10px',
                                                        backgroundColor: 'red'
                                                    }}
                                                    onClick={()=> {
                                                        setDataDel(e.id)
                                                        setToggleDelete(true)
                                                    }}
                                                    outline={'red'}
                                                    label={'Delete'}
                                                />
                                            </>
                                            )}
                                            <ButtonBasic
                                                onClick={()=> {
                                                    setIsDetail(true)
                                                    setDataItem(e)
                                                    setShowModal(true)
                                                }}
                                                outline={'#7a7a7a'}
                                                label={'See Detail'}
                                                iconEnd={<ArrowRightAltIcon/>}
                                            />
                                        </div>
                                    </ContainerText>
                                    <div>
                                        <ImgContent src={Images.content1}/>
                                    </div>
                                </ContainerContent>
                            )
                        } else {
                            return (
                                <ContainerContent key={i}>
                                    <ContainerImgLeft>
                                        <ImgContent src={Images.content1}/>
                                    </ContainerImgLeft>
                                    <ContainerTextRight>
                                        <DescContent>{e.id}. {e.title}</DescContent>
                                        <TextContent>{e.body}</TextContent>
                                        <div>
                                            {userInfo !== null && (<>
                                                <ButtonBasic
                                                    style={{
                                                        color: 'white',
                                                        marginRight: '10px',
                                                        backgroundColor: 'green'
                                                    }}
                                                    onClick={()=> {
                                                        setIsEdit(true)
                                                        setDataItem(e)
                                                        setShowModal(true)
                                                    }}
                                                    outline={'green'}
                                                    label={'Edit'}
                                                />
                                                <ButtonBasic
                                                    style={{
                                                        color: 'white',
                                                        marginRight: '10px',
                                                        backgroundColor: 'red'
                                                    }}
                                                    onClick={()=> {
                                                        setDataDel(e.id)
                                                        setToggleDelete(true)
                                                    }}
                                                    outline={'red'}
                                                    label={'Delete'}
                                                />
                                            </>)}
                                            <ButtonBasic
                                                onClick={()=> {
                                                    setIsDetail(true)
                                                    setDataItem(e)
                                                    setShowModal(true)

                                                }}
                                                outline={'#7a7a7a'}
                                                label={'See Detail'}
                                                iconEnd={<ArrowRightAltIcon/>}
                                            />
                                        </div>
                                    </ContainerTextRight>
                                </ContainerContent>
                            )
                        }
                    }) : null
                }
                <div>
                    <ContainerProductList>
                        <div>
                            <h3 style={{ fontSize: '1.8rem'}}>Discover more test management features</h3>
                        </div>
                        <ProductList>
                            <div>
                                {product1.length > 0 ? product1.map((e,i)=> {
                                    return (
                                        <p key={i}>{e.text}</p>
                                    )
                                }) : null}
                            </div>
                            <div>
                                {product2.length > 0 ? product2.map((e,i) => {
                                    return (
                                        <p key={i}>{e.text}</p>
                                    )
                                }) : null}
                            </div>
                            <div>
                                
                            </div>
                        </ProductList>
                    </ContainerProductList>
                </div>
            </ContentSecond>
            {toggleLogout && logoutModal(dataDel)}
            {toggleDelete && deleteModal(dataDel)}
            <ModalHome
            dataItem={dataItem}
            isEdit={isEdit}
            isDetail={isDetail}
            getComment={_getComment}
            setShowModal={setShowModal}
            handleClose={_closeModal}
            showModal={showModal}
            />
            <Alerts
                type={showAlert.type}
                open={showAlert.visible}
                close={setAlert}
                msg={showAlert.msg}
                success={showAlert.success}
            />
        </div>
    )
}
export default Home