<script setup lang="ts">
  const { t } = useI18n()
  const { proxy } = useScriptUmamiAnalytics()

  useHead({ title: t('posts.installing_arch_linux.title') })

  useSeoMeta({ description: t('posts.installing_arch_linux.description') })

  defineOgImageComponent('Simple', { title: t('posts.installing_arch_linux.title') })

  const code1 = `ping cbpf.br
timedatectl set-ntp true
lsblk
cfdisk /dev/sda
mkfs.ext4 /dev/sda1
mkfs.ext4 /dev/sda2
mount /dev/sda2 /mnt
mkdir /mnt/boot
mount /dev/sda1 /mnt/boot
lsblk
pacstrap /mnt base base-devel linux linux-firmware nano
genfstab /mnt
genfstab -U /mnt
genfstab -U /mnt /mnt/etc/fstab
arch-chroot /mnt /bin/bash    
pacman -S networkmanager grub dosfstools os-prober mtools   (non uefi)
pacman -S networkmanager grub efibootmgr dosfstools os-prober mtools   (uefi)
systemctl enable NetworkManager
grub-install --target=i386-pc --recheck /dev/sda (non uefi)
grub-install --target=x86_64-efi --bootloader-id=grub_uefi --recheck /dev/sda (uefi)
grub-mkconfig -o /boot/grub/grub.cfg
nano /etc/default/grub
passwd
localectl set-keymap --no-convert br-abnt2
nano /etc/hostname
nano /etc/locale.gen
nano /etc/locale.conf
ln -sf /usr/share/zoneinfo/America/Brazil/ /etc/localtime
exit
umount -R /mnt
reboot
useradd -m gabrielrosa
passwd gabrielrosa
groupadd sudo
usermod -aG sudo gabrielrosa
nano /etc/sudoers
pacman -Syu
pacman -S neofetch`

  function youtubePlay(event: { data: number }): void {
    if (event.data === 1) {
      proxy.track('play video', { video: 'installing_arch' })
    }
  }
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <div class="space-y-10 px-20 py-5 text-center sm:text-start lg:space-y-20">
      <h1 class="inline border-b-2 border-candy text-4xl text-obsidian dark:text-snow">
        {{ t('posts.installing_arch_linux.title') }}
      </h1>
    </div>
    <div class="mt-10 space-y-5 px-10 text-obsidian dark:text-snow">
      <ScriptYouTubePlayer video-id="YGX3None2y8" @state-change="youtubePlay" />
      <p>{{ t('posts.installing_arch_linux.paragraph1') }}</p>
      <CodeHighlight file-name="Arch Install" :code="code1" lang="shell" />
      <p>{{ t('posts.installing_arch_linux.paragraph2') }}</p>
      <p>{{ t('posts.final_paragraph') }}</p>
    </div>
  </div>
</template>
