// import {layoutComponents} from "../components/layout/index";
// import {ArticleComponent} from "../components/article.comp";
// import {HomeComponent} from "../pages/home.comp";
// import {CLoginComponent} from "../pages/login.comp";
// import {CRegisterComponent} from "../pages/register.comp";
// import {RouterOutlet} from "../router/router-outlet";
import {ComponentRegistry} from "./component-registry";
// import {ProfileComponent} from "../pages/profile.comp";
// import {ArticlePreviewComponent} from "../pages/article-preview.comp";
// import {CommentPreviewComponent} from "../components/comment-preview.comp";
// import {EditorComponent} from "../pages/editor.comp";
// import {SettingsComponent} from "../pages/settings.comp";
// import {PopularTagsComponent} from "../components/popular-tags.comp";
// import {UserInfoComponent} from "../components/user-info.comp";
// import {ArticlePreviewBannerComponent} from "../components/article-preview-banner";
// import {CommentCreateComponent} from "../components/comment-create.comp";
import {Timeline} from '../components/Timeline'
import {TimelineEvent} from '../components/TimelineEvent'
import {TimelineIcon} from '../components/TimelineIcon'
import {Languages} from '../components/Languages'


export class Core {
    constructor() {
        if (!Core.inst) {
            Core.inst = this;
        } else {
            throw new Error('use instance');
        }

        ComponentRegistry.register(components);

        return Core.inst;
    }

    static get instance() {
        return Core.inst;
    }
}
Core.inst = null;

const components = [

    {
        tagName: 'timeline-component',
        component: Timeline
    },
    {
        tagName:'timeline-event',
        component: TimelineEvent
    },
    {
        tagName:'timeline-icon',
        component: TimelineIcon
    },
    {
        tagName:'lang-container',
        component: Languages
    }

];
