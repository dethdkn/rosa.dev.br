<script setup lang='ts'>
import { codeToHtml } from 'shikiji'

const { t } = useI18n()

useHead({
	title: t('posts.installing_arch_linux.title'),
})

useSeoMeta({
	description: t('posts.installing_arch_linux.description'),
})

defineOgImageComponent('Simple', {
	title: t('posts.installing_arch_linux.title'),
})

const code1 = await codeToHtml(`ping cbpf.br
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
pacman -S neofetch`, { lang: 'shell', themes: { light: 'material-theme-lighter', dark: 'tokyo-night' } })
</script>

<template>
	<div class="max-w-7xl mx-auto">
		<div class="px-20 py-5 space-y-10 text-center lg:space-y-20 sm:text-start">
			<h1 class="text-[#4C4F69] dark:text-[#CDD5F4] text-4xl border-b-2 border-[#F28AA9] inline">
				{{ t('posts.installing_arch_linux.title') }}
			</h1>
		</div>
		<div class="text-[#4C4F69] dark:text-[#CDD5F4] mt-10 px-10 space-y-5">
			<iframe class="m-auto w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[40rem] rounded-lg" src="https://www.youtube.com/embed/YGX3None2y8" title="Instalando o Arch Linux (o guia mais fácil do youtube)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
			<p>{{ t('posts.installing_arch_linux.paragraph1') }}</p>
			<CodeHighlight file-name="Arch Install">
				<div v-html="code1" />
			</CodeHighlight>
			<p>{{ t('posts.installing_arch_linux.paragraph2') }}</p>
			<p>{{ t('posts.final_paragraph') }}</p>
		</div>
	</div>
</template>
