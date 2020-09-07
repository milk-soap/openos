import { Interface } from "readline";

declare global {
    interface ITreeNode {
        // 부서, 유저 공통
        title: string;
        key: string;
        gubun: `G` | `T` | `P`;
        groupParentId: string;
        groupSeq: string;
        nodeEnd: string;
        nodeStart: string;
        orgCode: string;

        // 부서
        children?: ITreeNode[];
        groupCode?: string;
        groupName?: string;

        // 유저 
        classMaxCode?: string,
        // 사용자접속위치
        // CONNECT_TYPE_OUT                = 0, 접속안함 (리눅스는 공백)
        // CONNECT_TYPE_APP                = 1, 윈도우즈 메신저
        // CONNECT_TYPE_WEB                = 2, 웹 메신저
        // CONNECT_TYPE_CON                = 3, 웹메신저 상담
        // CONNECT_TYPE_MOBILE_ANDROID     = 4, 안드로이드 모바일
        // CONNECT_TYPE_MOBILE_ANDROID_TAB = 5, 안드로이드 탭
        // CONNECT_TYPE_MOBILE_IOS         = 6, 아이폰
        // CONNECT_TYPE_MOBILE_IOS_PAD     = 7, 아이폰 PAD
        // CONNECT_TYPE_APP_MAC            = 10, 맥버전
        connectType?: string,
        pullClassId?: string,
        pullGroupName?: string,
        sipId?: string,
        smsUsed?: string,
        syncOpt?: string,
        userAliasName?: string,
        userBirthGubun?: string,
        userBirthday?: string,
        userCertify?: string,
        userEmail?: string,
        userEtcState?: string,
        userExtState?: string,
        userGroupCode?: string,
        userGroupName?: string,
        userGubun?: string,
        userId?: string,
        userIpphoneDbGroup?: string,
        userName?: string,
        userPayclName?: string,
        userPhoneState?: string,
        userPicturePos?: string,
        userState?: string,
        userTelCompany?: string,
        userTelFax?: string,
        userTelIpphone?: string,
        userTelMobile?: string,
        userTelOffice?: string,
        userViewOrgGroup?: string,
        userWorkName?: string,
        userXmlPic?: string,
        viewOpt?: string
    }

    interface IFavoriteNode {
        title: string;
        key: string;
        gubun: `G` | `U`;
        id: string;
        name: string;

        children?: IFavoriteNode[]
    }
}