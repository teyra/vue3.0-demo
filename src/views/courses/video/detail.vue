<template>
  <div class="video-page">
    <!-- 悬浮头部 -->
    <!-- <FloatHeader /> -->
    <!-- 视频播放区域 -->
    <div
      v-if="course.fileUrl"
      class="video-area"
      :style="{ height: height + 'px' }"
    >
      <video
        id="player-container-id"
        preload="auto"
        playsinline
        webkit-playsinline
      ></video>
      <div
        class="last-time"
        v-if="playing && lastPlayTimeShow && lastPlayTime > 5"
      >
        上次观看到 {{ getVideoTime(lastPlayTime) }}
      </div>
      <div class="live-status">
        <div class="content">
          <span>{{ watchPerson }}</span>
          <span class="title">人次</span>
        </div>
      </div>
      <div class="share-btn" @click="goShare" v-if="!playing">
        <span class="text">分享</span>
      </div>
      <div class="play-btn" @click="playVideo" v-if="!playing">
        <img
          src="@/assets/image/player/play.png"
          width="44"
          height="44"
          alt=""
        />
      </div>
      <div
        class="cover-bg"
        :style="{ height: height + 'px' }"
        v-if="!playing"
      ></div>
    </div>
    <van-tabs
      v-model="active"
      title-active-color="#001B34"
      title-inactive-color="#7F8C99"
      color="#4C93F7"
    >
      <van-tab title="详情">
        <div
          class="detail-content"
          :style="{ 'max-height': scroll_height + 'px' }"
        >
          <!-- 关注店铺 -->
          <div class="shop">
            <div class="shop-content">
              <div class="content">
                <img
                  style="
                    border: 0.5px solid rgba(208, 208, 208, 1);
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                  "
                  :src="course.tenantLogo"
                  v-if="course.tenantLogo"
                />
                <div class="title">
                  <div class="name">{{ course.tenantName }}</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 课程介绍区域 -->
          <div class="courseInstruction">
            <div class="courseInstruction-content">
              <div class="title">
                {{ course.name }}
              </div>
              <div class="category-area">
                <div class="category">
                  <span
                    class="category-name-1"
                    v-if="course.platformCategoryId === 1"
                    >{{ course.platformCategoryName }}</span
                  >
                  <span
                    class="category-name-2"
                    v-if="course.platformCategoryId === 2"
                    >{{ course.platformCategoryName }}</span
                  >
                  <span
                    class="category-name-3"
                    v-if="course.platformCategoryId === 3"
                    >{{ course.platformCategoryName }}</span
                  >
                  <span
                    class="category-name-4"
                    v-if="course.platformCategoryId === 4"
                    >{{ course.platformCategoryName }}</span
                  >
                  <span
                    class="category-name-5"
                    v-if="course.platformCategoryId === 5"
                    >{{ course.platformCategoryName }}</span
                  >

                  <span class="zhibo">视频</span>
                </div>
                <span class="startTime"
                  >上架时间：{{ course.onsaleTime }}
                </span>
              </div>
              <!-- 简介 -->
              <div class="introduction" v-if="course.introduction">
                <div
                  v-if="course.introduction && course.introduction.length < 20"
                >
                  <span>{{ course.introduction }}</span>
                </div>
                <div v-else>
                  <div v-if="!more" style="display: flex; align-items: center">
                    <div class="more" :style="{ width: width * 0.8 + 'px' }">
                      <span>{{ course.introduction }}</span>
                    </div>
                    <div>
                      <span class="detail" @click="more = true">详情</span>
                    </div>
                  </div>
                  <div v-else style="display: flex; align-items: center">
                    <div>
                      <span>{{ course.introduction }}</span>
                      <span class="detail" @click="more = false">收起</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-html="course.details"
            v-if="course.details"
            id="rich-content"
            style="padding: 10px 15px 0 15px"
          ></div>
        </div>
      </van-tab>
      <van-tab title="评价">内容 2</van-tab>
    </van-tabs>
    <div class="poster" v-if="posterShow">
      <Poster
        :title="course.name"
        v-if="course.id"
        @change="changeTitle"
      ></Poster>
    </div>
  </div>
</template>
<script src="./detail.js"></script>
<style scoped lang="scss" src="./detail.scss"></style>
<style  lang="scss" src="@/assets/styles/player.scss"></style>
<style  lang="scss" src="@/assets/styles/rich.scss"></style>


