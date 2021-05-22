import hmtai from "hmtai";
import React from "react";
import {
 Page,
 Toolbar,
 Tab,
 Tabbar,
 Card,
 ToolbarButton,
 Icon
} from "react-onsenui";
import { hot } from "react-hot-loader/root";

class NONSFW extends React.Component {
 render() {
  return (
   <>
    <H s={hmtai.wallpaper()} n="wallpaper" />
    <H s={hmtai.mobileWallpaper()} n="mobileWallpaper" />
    <H s={hmtai.neko()} n="neko" />
    <H s={hmtai.jahy()} n="jahy" />
   </>
  );
 }
}

class NSFW extends React.Component {
 render() {
  return (
   <>
    <H s={hmtai.nsfw.ass()} n="ass" />
    <H s={hmtai.nsfw.bdsm()} n="bdsm" />
    <H s={hmtai.nsfw.cum()} n="cum" />
    <H s={hmtai.nsfw.creampie()} n="creampie" />
    <H s={hmtai.nsfw.manga()} n="manga" />
    <H s={hmtai.nsfw.femdom()} n="femdom" />
    <H s={hmtai.nsfw.hentai()} n="hentai" />
    <H s={hmtai.nsfw.incest()} n="incest" />
    <H s={hmtai.nsfw.masturbation()} n="masturbation" />
    <H s={hmtai.nsfw.public()} n="public" />
    <H s={hmtai.nsfw.ero()} n="ero" />
    <H s={hmtai.nsfw.orgy()} n="orgy" />
    <H s={hmtai.nsfw.elves()} n="elves" />
    <H s={hmtai.nsfw.yuri()} n="yuri" />
    <H s={hmtai.nsfw.pantsu()} n="pantsu" />
    <H s={hmtai.nsfw.glasses()} n="glasses" />
    <H s={hmtai.nsfw.cuckold()} n="cuckold" />
    <H s={hmtai.nsfw.blowjob()} n="blowjob" />
    <H s={hmtai.nsfw.boobjob()} n="boobjob" />
    <H s={hmtai.nsfw.foot()} n="foot" />
    <H s={hmtai.nsfw.thighs()} n="thighs" />
    <H s={hmtai.nsfw.ahegao()} n="ahegao" />
    <H s={hmtai.nsfw.uniform()} n="uniform" />
    <H s={hmtai.nsfw.gangbang()} n="gangbang" />
    <H s={hmtai.nsfw.tentacles()} n="tentacles" />
    <H s={hmtai.nsfw.gif()} n="gif" />
    <H s={hmtai.nsfw.nsfwNeko()} n="nsfwNeko" />
    <H s={hmtai.nsfw.nsfwMobileWallpaper()} n="nsfwMobileWallpaper" />
    <H s={hmtai.nsfw.zettaiRyouiki()} n="zettaiRyouiki" />
   </>
  );
 }
}

class H extends React.Component {
 render() {
  const { n, s } = this.props;
  return (
   <Card>
    <img src={s} alt={n} style={{ width: "100%" }} />
    <div className="title right">{n.charAt(0).toUpperCase() + n.slice(1)}</div>
   </Card>
  );
 }
}

class MyTab extends React.Component {
 render() {
  return (
   <Page>
    <section style={{ margin: "8px" }}>
     <p>{this.props.content}</p>
    </section>
   </Page>
  );
 }
}

class App extends React.Component {
 renderToolbar() {
  return (
   <Toolbar>
    <div className="center">HMtai API</div>
    <div className="right">
     <ToolbarButton
      onClick={() => {
       location.reload();
      }}
     >
      <Icon icon="md-refresh"></Icon>
     </ToolbarButton>
    </div>
   </Toolbar>
  );
 }

 renderTabs() {
  return [
   {
    content: <MyTab content={<NONSFW />} />,
    tab: <Tab label="NO NSFW" />
   },
   {
    content: <MyTab content={<NSFW />} />,
    tab: <Tab label="NSFW" />
   }
  ];
 }

 render() {
  return (
   <Page renderToolbar={this.renderToolbar}>
    <Tabbar swipeable={true} position="auto" renderTabs={this.renderTabs} />
   </Page>
  );
 }
}

export default hot(App);
