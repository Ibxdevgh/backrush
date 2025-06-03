import{t as v,b as s,a as n}from"../chunks/Cw4I5osi.js";import"../chunks/BzVk5r6l.js";import{s as e,f as h,c as J,n as t,r as V}from"../chunks/NgVQVlRK.js";import{n as N}from"../chunks/B4IyMRKX.js";import{S as b}from"../chunks/B6JyFckC.js";import"../chunks/hMT8fFzP.js";import{I as Q}from"../chunks/BypEz2Fd.js";import"../chunks/NwRJ91PD.js";import{O as L,a as D}from"../chunks/uti8MWrk.js";/* empty css                */import"../chunks/BZUG4Puk.js";import{I as T}from"../chunks/CmUbQthf.js";import"../chunks/D9bBQFLV.js";import{C as O}from"../chunks/DXp9_3zM.js";import{F as R}from"../chunks/OFUKRh55.js";import"../chunks/POtwinrL.js";import"../chunks/CbbZjpT6.js";/* empty css                *//* empty css                */import{P as p}from"../chunks/D8YsId2T.js";import{S as x}from"../chunks/yHjwcyUH.js";import{L as M}from"../chunks/yh4_9ChP.js";import{A as X}from"../chunks/CqOphJLh.js";const Z={layout:"article",title:"Start with Android (Kotlin)",description:"Get started with Backrush on Android and learn how to build secure and scalable apps using our powerful backend.",difficulty:"beginner",readtime:3,back:"/docs/quick-starts"};var tt=v("Learn how to setup your first Android project powered by Backrush and the <!>.",1),et=v("Check out the <!> guide.",1),nt=v("Open Android Studio and click <!> to create a new project.",1),rt=v("Choose your desired project template, for example <!>, and click <!>.",1),ot=v("Now enter your app <!> and <!>. You will need both of these later when you create your project in the Backrush console. Click <!> to create your project.",1),at=v("<!><!><!>",1),it=v("Head to the <!>.",1),st=v("Then, under <!>, add an <!>.",1),dt=v("Add your app&#39;s <!> and <!>, your package name is the one entered when creating an Android project. For existing projects, you should use the <!> in your app-level <!> file.",1),lt=v("<!><!><!><!><!><!><!><!><!>",1),pt=v("To add the Backrush SDK for Android as a dependency, add the following to your app-level <!> file inside the <!> block.",1),ct=v("In order to allow creating OAuth sessions, the following activity needs to be added inside the <!> tag, along side the existing <!> tags in your <!>. Be sure to replace the <!> string with your actual Backrush project ID. You can find your Backrush project ID in you project settings screen in your Backrush Console.",1),ut=v("<!><!><!><!>",1),mt=v("Find your project&#39;s ID in the <!> page.",1),$t=v("Create a new file <!> and add the following code to it, replacing <!> with your project ID.",1),ft=v("<!><!><!><!><!>",1),vt=v("Add the following code to <!>.",1),gt=v("<!><!>",1),ht=v("Run your project by clicking <!> in Android Studio.",1),_t=v("<article><!><!><!><!><!><!><!><!></article>");function qt(W){X(W,N(Z,{children:(G,xt)=>{var I=_t(),B=J(I);p(B,{children:(A,k)=>{t();var c=tt(),_=e(h(c));M(_,{href:"https://github.com/Back-rush/sdk-for-android",children:(u,g)=>{t();var m=s("Backrush Android SDK");n(u,m)},$$slots:{default:!0}}),t(),n(A,c)},$$slots:{default:!0}});var z=e(B);Q(z,{title:"Using Java?",children:(A,k)=>{p(A,{children:(c,_)=>{t();var u=et(),g=e(h(u));M(g,{href:"/docs/quick-starts/android-java",children:(m,l)=>{t();var a=s("Start with Android (Java)");n(m,a)},$$slots:{default:!0}}),t(),n(c,u)},$$slots:{default:!0}})}});var K=e(z);b(K,{id:"step-1",step:1,title:"Create Android project",children:(A,k)=>{var c=at(),_=h(c);p(_,{children:(m,l)=>{t();var a=nt(),d=e(h(a));x(d,{marker:"**",children:(i,$)=>{t();var r=s("New Project");n(i,r)},$$slots:{default:!0}}),t(),n(m,a)},$$slots:{default:!0}});var u=e(_);p(u,{children:(m,l)=>{t();var a=rt(),d=e(h(a));x(d,{marker:"**",children:($,r)=>{t();var f=s("Empty Activity");n($,f)},$$slots:{default:!0}});var i=e(d,2);x(i,{marker:"**",children:($,r)=>{t();var f=s("Next");n($,f)},$$slots:{default:!0}}),t(),n(m,a)},$$slots:{default:!0}});var g=e(u);p(g,{children:(m,l)=>{t();var a=ot(),d=e(h(a));x(d,{marker:"**",children:(r,f)=>{t();var o=s("name");n(r,o)},$$slots:{default:!0}});var i=e(d,2);x(i,{marker:"**",children:(r,f)=>{t();var o=s("package name");n(r,o)},$$slots:{default:!0}});var $=e(i,2);x($,{marker:"**",children:(r,f)=>{t();var o=s("Finish");n(r,o)},$$slots:{default:!0}}),t(),n(m,a)},$$slots:{default:!0}}),n(A,c)},$$slots:{default:!0}});var U=e(K);b(U,{id:"step-2",step:2,title:"Create Backrush project",children:(A,k)=>{var c=lt(),_=h(c);p(_,{children:(r,f)=>{t();var o=it(),w=e(h(o));M(w,{href:"https://cloud.backrush.io/console",children:(P,C)=>{t();var E=s("Backrush Console");n(P,E)},$$slots:{default:!0}}),t(),n(r,o)},$$slots:{default:!0}});var u=e(_);L(u,{children:(r,f)=>{p(r,{children:(o,w)=>{T(o,{src:"/images/docs/quick-starts/dark/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var g=e(u);D(g,{children:(r,f)=>{p(r,{children:(o,w)=>{T(o,{src:"/images/docs/quick-starts/create-project.png",alt:"Create project screen"})},$$slots:{default:!0}})}});var m=e(g);p(m,{children:(r,f)=>{t();var o=s("If this is your first time using Backrush, create an account and create your first project.");n(r,o)},$$slots:{default:!0}});var l=e(m);p(l,{children:(r,f)=>{t();var o=st(),w=e(h(o));x(w,{marker:"**",children:(C,E)=>{t();var y=s("Add a platform");n(C,y)},$$slots:{default:!0}});var P=e(w,2);x(P,{marker:"**",children:(C,E)=>{t();var y=s("Android app");n(C,y)},$$slots:{default:!0}}),t(),n(r,o)},$$slots:{default:!0}});var a=e(l);p(a,{children:(r,f)=>{t();var o=dt(),w=e(h(o));x(w,{marker:"**",children:(y,j)=>{t();var S=s("name");n(y,S)},$$slots:{default:!0}});var P=e(w,2);x(P,{marker:"**",children:(y,j)=>{t();var S=s("package name");n(y,S)},$$slots:{default:!0}});var C=e(P,2);x(C,{marker:"**",children:(y,j)=>{t();var S=s("applicationId");n(y,S)},$$slots:{default:!0}});var E=e(C,2);M(E,{href:"https://github.com/Back-rush/playground-for-android/blob/master/app/build.gradle#L11",children:(y,j)=>{t();var S=s("build.gradle");n(y,S)},$$slots:{default:!0}}),t(),n(r,o)},$$slots:{default:!0}});var d=e(a);L(d,{children:(r,f)=>{p(r,{children:(o,w)=>{T(o,{src:"/images/docs/quick-starts/dark/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var i=e(d);D(i,{children:(r,f)=>{p(r,{children:(o,w)=>{T(o,{src:"/images/docs/quick-starts/add-platform.png",alt:"Add a platform"})},$$slots:{default:!0}})}});var $=e(i);p($,{children:(r,f)=>{t();var o=s("You can skip optional steps.");n(r,o)},$$slots:{default:!0}}),n(A,c)},$$slots:{default:!0}});var F=e(U);b(F,{id:"step-3",step:3,title:"Add the Backrush SDK",children:(A,k)=>{var c=ut(),_=h(c);p(_,{children:(l,a)=>{t();var d=pt(),i=e(h(d));x(i,{marker:"**",children:(r,f)=>{t();var o=s("build.gradle.kts");n(r,o)},$$slots:{default:!0}});var $=e(i,2);x($,{marker:"**",children:(r,f)=>{t();var o=s("dependencies");n(r,o)},$$slots:{default:!0}}),t(),n(l,d)},$$slots:{default:!0}});var u=e(_);R(u,{content:`implementation("io.backrush:sdk-for-android:7.0.0")
`,language:"kotlin",process:!0,children:(l,a)=>{t();var d=s('implementation("io.backrush:sdk-for-android:7.0.0")');n(l,d)},$$slots:{default:!0}});var g=e(u);p(g,{children:(l,a)=>{t();var d=ct(),i=e(h(d));O(i,{content:"<application>"});var $=e(i,2);O($,{content:"<activity>"});var r=e($,2);M(r,{href:"https://github.com/Back-rush/playground-for-flutter/blob/master/android/app/src/main/AndroidManifest.xml",children:(o,w)=>{t();var P=s("AndroidManifest.xml");n(o,P)},$$slots:{default:!0}});var f=e(r,2);x(f,{marker:"**",children:(o,w)=>{t();var P=s("[PROJECT_ID]");n(o,P)},$$slots:{default:!0}}),t(),n(l,d)},$$slots:{default:!0}});var m=e(g);R(m,{content:`<manifest ...>
  ...
  <application ...>
    ...
    <!-- Add this inside the \`<application>\` tag, along side the existing \`<activity>\` tags -->
    <activity android:name="io.backrush.views.CallbackActivity" android:exported="true">
      <intent-filter android:label="android_web_auth">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="backrush-callback-[PROJECT_ID]" />
      </intent-filter>
    </activity>
  </application>
</manifest>
`,language:"xml",process:!0,children:(l,a)=>{t();var d=s(`<manifest ...>
  ...
  <application ...>
    ...
    <!-- Add this inside the \`<application>\` tag, along side the existing \`<activity>\` tags -->
    <activity android:name="io.backrush.views.CallbackActivity" android:exported="true">
      <intent-filter android:label="android_web_auth">
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="backrush-callback-[PROJECT_ID]" />
      </intent-filter>
    </activity>
  </application>
</manifest>`);n(l,d)},$$slots:{default:!0}}),n(A,c)},$$slots:{default:!0}});var H=e(F);b(H,{id:"step-4",step:4,title:"Create Backrush Singleton",children:(A,k)=>{var c=ft(),_=h(c);p(_,{children:(a,d)=>{t();var i=mt(),$=e(h(i));x($,{marker:"**",children:(r,f)=>{t();var o=s("Settings");n(r,o)},$$slots:{default:!0}}),t(),n(a,i)},$$slots:{default:!0}});var u=e(_);L(u,{children:(a,d)=>{p(a,{children:(i,$)=>{T(i,{src:"/images/docs/quick-starts/dark/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var g=e(u);D(g,{children:(a,d)=>{p(a,{children:(i,$)=>{T(i,{src:"/images/docs/quick-starts/project-id.png",alt:"Project settings screen"})},$$slots:{default:!0}})}});var m=e(g);p(m,{children:(a,d)=>{t();var i=$t(),$=e(h(i));O($,{content:"Backrush.kt"});var r=e($,2);O(r,{content:"[PROJECT_ID]"}),t(),n(a,i)},$$slots:{default:!0}});var l=e(m);R(l,{content:`package <YOUR_ROOT_PACKAGE_HERE>

import android.content.Context
import io.backrush.Client
import io.backrush.ID
import io.backrush.models.*
import io.backrush.services.*

object Backrush {
    lateinit var client: Client
    lateinit var account: Account

    fun init(context: Context) {
        client = Client(context)
            .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
            .setProject("[PROJECT_ID]")

        account = Account(client)
    }

    suspend fun onLogin(
        email: String,
        password: String,
    ): Session {
        return account.createEmailPasswordSession(
            email,
            password,
        )
    }

    suspend fun onRegister(
        email: String,
        password: String,
    ): User<Map<String, Any>> {
        return account.create(
            userId = ID.unique(),
            email,
            password,
        )
    }

    suspend fun onLogout() {
        account.deleteSession("current")
    }
}
`,language:"kotlin",process:!0,children:(a,d)=>{t();var i=s(`package <YOUR_ROOT_PACKAGE_HERE>

import android.content.Context
import io.backrush.Client
import io.backrush.ID
import io.backrush.models.*
import io.backrush.services.*

object Backrush {
    lateinit var client: Client
    lateinit var account: Account

    fun init(context: Context) {
        client = Client(context)
            .setEndpoint("https://<REGION>.cloud.backrush.io/v1")
            .setProject("[PROJECT_ID]")

        account = Account(client)
    }

    suspend fun onLogin(
        email: String,
        password: String,
    ): Session {
        return account.createEmailPasswordSession(
            email,
            password,
        )
    }

    suspend fun onRegister(
        email: String,
        password: String,
    ): User<Map<String, Any>> {
        return account.create(
            userId = ID.unique(),
            email,
            password,
        )
    }

    suspend fun onLogout() {
        account.deleteSession("current")
    }
}`);n(a,i)},$$slots:{default:!0}}),n(A,c)},$$slots:{default:!0}});var q=e(H);b(q,{id:"step-5",step:5,title:"Create a login page",children:(A,k)=>{var c=gt(),_=h(c);p(_,{children:(g,m)=>{t();var l=vt(),a=e(h(l));O(a,{content:"MainActivity.kt"}),t(),n(g,l)},$$slots:{default:!0}});var u=e(_);R(u,{content:`package <YOUR_ROOT_PACKAGE_HERE>

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.*
import androidx.compose.ui.text.input.*
import androidx.compose.ui.unit.*
import <YOUR_ROOT_PACKAGE_HERE>.ui.theme.MyApplicationTheme
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    @OptIn(ExperimentalMaterial3Api::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        Backrush.init(applicationContext)

        setContent {
            MyApplicationTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val coroutineScope = rememberCoroutineScope()

                    var user by remember { mutableStateOf("") }
                    var email by remember { mutableStateOf("") }
                    var password by remember { mutableStateOf("") }

                    if (user.isNotEmpty()) {
                        Column(
                            modifier = Modifier.fillMaxSize(),
                            horizontalAlignment = Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.Center
                        ) {
                            Text(text = "Logged in as $user")
                            Button(onClick = {
                                coroutineScope.launch {
                                    Backrush.onLogout()
                                }
                            }) {
                                Text("Logout")
                            }
                        }
                    }

                    Column(
                        modifier = Modifier.fillMaxSize(),
                        horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.Center
                    ) {
                        TextField(
                            value = email,
                            onValueChange = { email = it },
                            label = { Text("Username") },
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp)
                        )
                        TextField(
                            value = password,
                            onValueChange = { password = it },
                            label = { Text("Password") },
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp),
                            visualTransformation = PasswordVisualTransformation(),
                            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password)
                        )
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Button(onClick = {
                                coroutineScope.launch {
                                    try {
                                        Backrush.onLogin(email, password)

                                        user = email
                                    } catch (e: Exception) {
                                        e.printStackTrace()
                                    }
                                }
                            }) {
                                Text("Login")
                            }
                            Button(onClick = {
                                coroutineScope.launch {
                                    try {
                                        Backrush.onRegister(email, password)
                                    } catch (e: Exception) {
                                        e.printStackTrace()
                                    }
                                }
                            }) {
                                Text("Register")
                            }
                        }
                    }
                }
            }
        }
    }
}
`,language:"kotlin",process:!0,children:(g,m)=>{t();var l=s(`package <YOUR_ROOT_PACKAGE_HERE>

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.text.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.*
import androidx.compose.ui.text.input.*
import androidx.compose.ui.unit.*
import <YOUR_ROOT_PACKAGE_HERE>.ui.theme.MyApplicationTheme
import kotlinx.coroutines.launch

class MainActivity : ComponentActivity() {
    @OptIn(ExperimentalMaterial3Api::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        Backrush.init(applicationContext)

        setContent {
            MyApplicationTheme {
                Surface(
                    modifier = Modifier.fillMaxSize(),
                    color = MaterialTheme.colorScheme.background
                ) {
                    val coroutineScope = rememberCoroutineScope()

                    var user by remember { mutableStateOf("") }
                    var email by remember { mutableStateOf("") }
                    var password by remember { mutableStateOf("") }

                    if (user.isNotEmpty()) {
                        Column(
                            modifier = Modifier.fillMaxSize(),
                            horizontalAlignment = Alignment.CenterHorizontally,
                            verticalArrangement = Arrangement.Center
                        ) {
                            Text(text = "Logged in as $user")
                            Button(onClick = {
                                coroutineScope.launch {
                                    Backrush.onLogout()
                                }
                            }) {
                                Text("Logout")
                            }
                        }
                    }

                    Column(
                        modifier = Modifier.fillMaxSize(),
                        horizontalAlignment = Alignment.CenterHorizontally,
                        verticalArrangement = Arrangement.Center
                    ) {
                        TextField(
                            value = email,
                            onValueChange = { email = it },
                            label = { Text("Username") },
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp)
                        )
                        TextField(
                            value = password,
                            onValueChange = { password = it },
                            label = { Text("Password") },
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp),
                            visualTransformation = PasswordVisualTransformation(),
                            keyboardOptions = KeyboardOptions(keyboardType = KeyboardType.Password)
                        )
                        Row(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(16.dp),
                            horizontalArrangement = Arrangement.SpaceBetween
                        ) {
                            Button(onClick = {
                                coroutineScope.launch {
                                    try {
                                        Backrush.onLogin(email, password)

                                        user = email
                                    } catch (e: Exception) {
                                        e.printStackTrace()
                                    }
                                }
                            }) {
                                Text("Login")
                            }
                            Button(onClick = {
                                coroutineScope.launch {
                                    try {
                                        Backrush.onRegister(email, password)
                                    } catch (e: Exception) {
                                        e.printStackTrace()
                                    }
                                }
                            }) {
                                Text("Register")
                            }
                        }
                    }
                }
            }
        }
    }
}`);n(g,l)},$$slots:{default:!0}}),n(A,c)},$$slots:{default:!0}});var Y=e(q);b(Y,{id:"step-6",step:6,title:"All set",children:(A,k)=>{p(A,{children:(c,_)=>{t();var u=ht(),g=e(h(u));x(g,{marker:"**",children:(m,l)=>{t();var a=s("Run app");n(m,a)},$$slots:{default:!0}}),t(),n(c,u)},$$slots:{default:!0}})},$$slots:{default:!0}}),V(I),n(G,I)},$$slots:{default:!0}}))}export{qt as component};
